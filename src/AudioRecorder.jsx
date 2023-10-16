import { useState, useRef } from "react";

const AudioRecorder = () => {
    const [permission, setPermission] = useState(false)
    const [stream, setStream] = useState(null)

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true,
                });
                setPermission(true);
                setStream(streamData);
            } catch(err) {
                alert(err.message);
            }
        }
    }

    return (
        <div>
            <h2>Audio Recorder</h2>
            <main>
                <div className="audio-contols">
                    {!permission ? (
                        <button onclick={getMicrophonePermission} type="button">
                            Get Microphone
                        </button>
                    ): null}
                    {permission ? (
                        <button type="button">
                            Record
                        </button>
                    ):null}
                </div>
            </main>
        </div>
    )
}

export default AudioRecorder;