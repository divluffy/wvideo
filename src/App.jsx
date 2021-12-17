import "./App.css";
import More from "./section/More";
import Nav from "./section/Nav";
import Player from "./section/Player";
import "./section/style.css";
import { useState } from "react";
import { vids } from "./components/Data";

function App() {
  const [src, setSrc] = useState(vids[1].src);
  return (
    <div className="App">
      <Nav />
      <main>
        <div className="bowl_player_home">
          <Player src={src} />
        </div>
        <div className="more_videos">
          <More setSrc={setSrc} />
        </div>
      </main>
    </div>
  );
}

export default App;
