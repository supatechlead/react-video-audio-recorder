import "./App.css";
import { useState, useRef } from "react";
import VideoRecorder from "./VideoRecorder";
import AudioRecorder from "./AudioRecorder";

const App = () => {
  let [recordOption, setRecordOption] = useState("videp")
  
  const toggleRecordOption = (type) => {
    return () => {
      setRecordOption(type);
    };
  }

    return (
      <div>
          <h1>React Media Recorder</h1>
          <div className="button-flex">
              <button onClick={toggleRecordOption("video")}>
                Record Video
              </button>
              <button onClick={toggleRecordOption("audio")}>
                Record Audio
              </button>
          </div>
          <div>
              {recordOption === "video" ? <VideoRecorder /> : <AudioRecorder />}
          </div>
      </div>
  );
};
export default App;
