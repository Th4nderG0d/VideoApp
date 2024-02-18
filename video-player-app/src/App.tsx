import React from "react";
import "./App.css";
import VideoPlayerComponent from "./components/VideoPlayer";

function App() {
	return (
		<div className="App">
			<VideoPlayerComponent autoPlay={true} />
		</div>
	);
}

export default App;
