import Layout from "./components/Layout/Layout";
import "./App.css";
import ContextLayers from "./components/ContextLayers/ContextLayers";
import IndexNavbar from "./Navbars/IndexNavbar";

function App() {
  return (
    <div className="App">
    
    <IndexNavbar/>
      <ContextLayers>
        <Layout />
      </ContextLayers>
      
    </div>
  );
}

export default App;
