import "./App.css";
import { Canned } from "./components/Canned";
import  VexForKeyboard  from './components/VexForKeyboard';
import { useState } from "react";
import _ from "lodash";
import * as Tone from "tone";
import { ButtonGrid, PianoKeyboard } from "@musicenviro/ui-elements";


// setInterval(() => {
//   console.log(Tone.Transport.position);
// }, 100);

function App() {
  const [notes, setNotes] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [notes2, setNotes2] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [audioStarted, setAudioStarted] = useState(false);
  const [keyboardNotes, setKeyboardNotes] = useState([]);

  const play = async () => {
    if (!audioStarted) {
      await Tone.start();
      console.log("context started");
      setAudioStarted(true);
    }
    Tone.Transport.start();
  };

  const stop = () => {
    Tone.Transport.pause();
  };

  const permutate = () => {
    Tone.Transport.cancel();
  };

 const onNoteDown = (keyDown, velocity, depressedKeys) => {
  console.log(keyDown);
  console.log(velocity);
  console.log(depressedKeys);
  setKeyboardNotes(depressedKeys)
 }

 const onNoteUp = (keyDown, velocity, depressedKeys) => {
  console.log(keyDown);
  console.log(velocity);
  console.log(depressedKeys);
  // setKeyboardNotes(depressedKeys)
 }

  return (
    <div>
      <Canned
        notes={notes}
        notes2={notes2}
      />
      <button
        onClick={() => {
          setNotes(_.shuffle(notes));
          setNotes2(_.shuffle(notes2));
          permutate();
          play();
        }}
      >
        permutate
      </button>
      <button onClick={play}>Play</button>
      <button onClick={stop}>Stop</button>
      <VexForKeyboard keyboardNotes={keyboardNotes} />
      <div className="keyboard-container">
        <PianoKeyboard 
          onNoteDown={onNoteDown}
          onNoteUp={onNoteUp}
          />
      </div>
      <ButtonGrid />
    </div>
  );
}

export default App;
