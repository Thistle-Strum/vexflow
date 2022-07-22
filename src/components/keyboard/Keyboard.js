import React from 'react';
import { useState } from 'react';
import VexForKeyboard from './VexForKeyboard';
import { PianoKeyboard } from '@musicenviro/ui-elements';

const Keyboard = () => {
    const [keyboardNotes, setKeyboardNotes] = useState([]);

    const onNoteDown = (keyDown, velocity, depressedKeys) => {
        console.log(keyDown);
        console.log(velocity);
        console.log(depressedKeys);
        setKeyboardNotes(depressedKeys);
    };


    const onNoteUp = (keyDown, velocity, depressedKeys) => {
        console.log(keyDown);
        console.log(velocity);
        console.log(depressedKeys);
    };

  return (
    <div>
    <VexForKeyboard keyboardNotes={keyboardNotes} />
    <div className="keyboard-container">
        <PianoKeyboard onNoteDown={onNoteDown} onNoteUp={onNoteUp} />
    </div>
    </div>
  )
}

export default Keyboard