import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Player from "./pages/Player";
import { Toaster } from "@/components/ui/toaster";

const App = () => (
<>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/player" element={<Player />} />
    </Routes>
    {/* global toast container */}
    <Toaster />
</>
 );

 export default App;