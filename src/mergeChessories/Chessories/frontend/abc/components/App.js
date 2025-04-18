import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSpeechRecognition } from 'react-speech-kit';
import useChess from 'react-chess.js';
import ChessNLP from 'chess-nlp';
import { Chess } from 'chess.js';
import Chessboard from 'react-simple-chessboard';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import GameStatus from './GameStatus';
import MoveHistoryTable from './MoveHistoryTable';

// Add aliases for sounds that Google Chrome's Web Speech API implementation
// often gets wrong
const parserOptions = {
    aliases: {
        knight: ['night'],
        rook: [
            'brooke', 'brooks', 'brookdale', 'brook', 'work', 'route', 'rough',
            'trucks', 'truck', 'ruck', 'rupp', 'rupt', 'rocket', 'rockstar',
            'rock', 'rugs', 'rug', 'look', 'ruff'
        ],
        king: ['teen'],
        a: ['alpha', 'office', 'off of', 'also'],
        b: ['bravo', 'beta', 'beat', 'bee', 'be'],
        c: ['charlie', 'sea', 'see'],
        d: ['delta', 'the'],
        e: ['echo', 'eat'],
        f: ['foxtrot', 'at', 'of'],
        g: ['golf', 'gulf'],
        h: ['hotel', 'stage', 'age', 'its', 'each'],
        2: ['too'],
        4: ['force', 'for', 'far', 'park', 'store', 'fork', 'ford', 'fort'],
        5: ['v', 'psi'],
        6: ['sex'],
    }
};

const parser = new ChessNLP(parserOptions);

/**
 * A chess game played with voice commands.
 */
const App = (props) => {
    const videoRef = useRef(null);
    const [cameraAllowed, setCameraAllowed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const INITIAL_MOVE_NUMBER = 0;
    const [status, setStatus] = useState({});
    const [moveNumber, setMoveNumber] = useState(INITIAL_MOVE_NUMBER);
    const [waitingForVoiceCommand, setWaitingForVoiceCommand] = useState(false);
    const voiceCommandTimeout = useRef(null);
    const stopListeningRef = useRef(null);
    
    const handleLegalMove = (move) => {
        const moveDesc = parser.sanToText(move);

        // Use batched update to prevent GameStatus from re-rendering twice
        // (once because of the change to moveNumber and once because of the
        // change to status), which would cause duplicate announcements
        ReactDOM.unstable_batchedUpdates(() => {
            setMoveNumber(n => n + 1);
            setStatus({
                display: `Moved ${move}`,
                announce: `Moved ${moveDesc}`
            });
        });
    };

    const handleIllegalMove = (move) => {
        const moveDesc = parser.sanToText(move);
        setStatus({
            display: `Illegal move: ${move}`,
            announce: `Illegal move: ${moveDesc}`
        });
    };

    const handleGameOver = () => {
        const status = 'Game over';
        setStatus({ display: status, announce: status });
    };

    const handleStalemate = () => {
        const status = 'Stalemate';
        setStatus({ display: status, announce: status });
    };

    const handleThreefoldRepetition = () => {
        const status = 'Draw due to threefold repetition';
        setStatus({ display: status, announce: status });
    };

    const handleInsufficientMaterial = () => {
        const status = 'Draw due to insufficient material';
        setStatus({ display: status, announce: status });
    };

    const { move: makeMove, undo, reset, history, fen } = useChess({
        onLegalMove: handleLegalMove,
        onIllegalMove: handleIllegalMove,
        onGameOver: handleGameOver,
        onStalemate: handleStalemate,
        onThreefoldRepetition: handleThreefoldRepetition,
        onInsufficientMaterial: handleInsufficientMaterial,
    });

    const handleVoiceCommand = useCallback((command) => {
        let status;
        setWaitingForVoiceCommand(false);

        switch (command) {
            case 'undo':
                undo();

                ReactDOM.unstable_batchedUpdates(() => {
                    status = 'Undid last move';
                    setMoveNumber(n => n - 1);
                    setStatus({ display: status, announce: status });
                });

                return;
            case 'reset':
                reset();

                ReactDOM.unstable_batchedUpdates(() => {
                    status = 'Reset game';
                    setMoveNumber(INITIAL_MOVE_NUMBER);
                    setStatus({ display: status, announce: status });
                });

                return;
            default:
                let move;

                try {
                    move = parser.textToSan(command);
                }
                catch (error) {
                    status = `I don't understand: ${command}`;
                    setStatus({ display: status, announce: status });
                    return;
                }

                makeMove(move);
        }
    }, [makeMove, reset, undo]);

    const {
        listen,
        listening,
        stop: stopListening,
        supported: speechRecognitionSupported
    } = useSpeechRecognition({
        onResult: handleVoiceCommand
    });
    
    useEffect(() => {
        // Requesting camera permission and displaying the video feed
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            setCameraAllowed(true);
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
            }
          })
          .catch((error) => {
            setErrorMessage("Unable to access the camera. Please allow camera access.");
          });
      }, []);
    
    // Workaround for issue in react-speech-kit to make sure we always have the

    useEffect(() => {
        stopListeningRef.current = stopListening;
    }, [stopListening]);

    // When we recognize that the user has issued a new voice command, cancel
    // the voice command timeout and stop listening
    useEffect(() => {
        if (listening && ! waitingForVoiceCommand) {
            clearTimeout(voiceCommandTimeout.current);
            stopListening();
        }
    }, [listening, stopListening, voiceCommandTimeout, waitingForVoiceCommand]);

    const handleClick = useCallback(() => {
        // Cancel current active timeout. If there isn't one, this will
        // silently do nothing
        clearTimeout(voiceCommandTimeout.current);

        setWaitingForVoiceCommand(true);

        // Give the user 5 seconds to say something after pushing the voice
        // command button
        voiceCommandTimeout.current = setTimeout(() => {
             stopListeningRef.current();
             setWaitingForVoiceCommand(false);
        }, 5000);

        listen({ interimResults: false, lang: 'en-US' });
    }, [listen, stopListeningRef, voiceCommandTimeout]);

    if (! speechRecognitionSupported) {
        return (
            <h2 className="error">
                Your browser doesn't support speech recognition.
            </h2>
        );
    }

    return (
        <Container className="app" fluid>
            <Row>
                <Col xs={12} sm={6} md={6} lg={5}>
                    <Chessboard position={fen} />
                </Col>
                
                <Col xm={6} sm={6} style={{ textAlign: 'center' }}>
                    <h2>Camera Access</h2>
                    {!cameraAllowed && errorMessage && (
                        <p style={{ color: 'red' }}>{errorMessage}</p>
                    )}
                    <div style={{ 
                        width: '320px', 
                        height: '240px', 
                        border: '2px solid black', 
                        margin: '20px auto' 
                    }}>
                    {cameraAllowed ? (
                        <video
                            ref={videoRef}
                            autoPlay
                            style={{ width: '100%', height: '100%' }}
                        ></video>
                    ) : (
                        <p>Please allow access to the camera.</p>
                    )}
                    </div>
                </Col>
            </Row>
            <br></br>
            
            <Row>
                <Col xs={12} sm={6} md={6} lg={5}>
                    <Button
                        className="voice-command-button"
                        onClick={handleClick}
                        disabled={listening}
                        block
                    >
                        {listening ? 'Listening' : 'Click to give voice command'}
                    </Button>
                    <GameStatus moveNumber={moveNumber} {...status} />
                    <MoveHistoryTable moves={history} />
                </Col>
                </Row>
                
        </Container>
    );
};

export default App;
