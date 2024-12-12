import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import CustomDialog from "./CustomDialog";
import socket from "./socket";

export default function InitGame({ setRoom, setOrientation, setPlayers }) {
  const [roomDialogOpen, setRoomDialogOpen] = useState(false);
  const [roomInput, setRoomInput] = useState(""); // input state
  const [roomError, setRoomError] = useState("");

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ py: 1, height: "100vh" }}
    >
      <CustomDialog
        open={roomDialogOpen}
        handleClose={() => setRoomDialogOpen(false)}
        title="Select Room to Join"
        contentText="Enter a valid room ID to join the room"
        handleContinue={() => {
          // join a room
          if (!roomInput) return; // if given room input is valid, do nothing.
          socket.emit("joinRoom", { roomId: roomInput }, (r) => {
            // r is the response from the server
            if (r.error) return setRoomError(r.message); // if an error is returned in the response set roomError to the error message and exit
            console.log("response:", r);
            setRoom(r?.roomId); // set room to the room ID
            setPlayers(r?.players); // set players array to the array of players in the room
            setOrientation("black"); // set orientation as black
            setRoomDialogOpen(false); // close dialog
          });
        }}
      >
        <TextField
          autoFocus
          margin="dense"
          id="room"
          label="Room ID"
          name="room"
          value={roomInput}
          required
          onChange={(e) => setRoomInput(e.target.value)}
          type="text"
          fullWidth
          variant="standard"
          error={Boolean(roomError)}
          helperText={
            !roomError ? "Enter a room ID" : `Invalid room ID: ${roomError}`
          }
        />
      </CustomDialog>
      {/* Button for starting a game */}
      <Button
        variant="contained"
        style={{color: "#FF5733",width: '400px', // Adjust width
    height: '50px' }}
        outline
        
        onClick={() => {
          socket.emit("createRoom", (r) => {
            console.log(r);
            setRoom(r);
            setOrientation("white");
          });
        }}
      >
      <div className="title-brand">
              <h1 className="presentation-title" style={{ fontSize: "2rem" }}>Start a game</h1>
              {/* <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div> */}
            </div>
        
      </Button>
      {/* Button for joining a game */}
      <br></br>
      <Button
      style={{color: "#FF5733" }}
        onClick={() => {
          setRoomDialogOpen(true);
        }}
        outline
      >
       <h2 className="presentation-subtitle text-center">
        Join a game
        </h2>
      </Button>
    </Stack>
  );
}
