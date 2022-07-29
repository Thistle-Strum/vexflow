import React from 'react';
import { useState } from 'react';
import VexForKeyboard from './VexForKeyboard';
import { PianoKeyboard } from '@musicenviro/ui-elements';
import EasyVexForKeyboard from './EasyVexForKeyboard';

const Keyboard = () => {
    const [keyboardNotes, setKeyboardNotes] = useState([]);
    const [note, setNote] = useState([]);

    const onNoteDown = (keyDown, velocity, depressedKeys) => {
        console.log(keyDown);
        console.log(velocity);
        console.log(depressedKeys);
        setNote(keyDown);
        setKeyboardNotes(depressedKeys);
    };

    const onNoteUp = (keyDown, velocity, depressedKeys) => {
        console.log(keyDown);
        console.log(velocity);
        console.log(depressedKeys);
    };

    return (
        <div>
            <EasyVexForKeyboard note={note} />
            <div className="keyboard-container">
                <PianoKeyboard onNoteDown={onNoteDown} onNoteUp={onNoteUp} />
            </div>
        </div>
    );
};

export default Keyboard;
// <VexForKeyboard keyboardNotes={keyboardNotes} />
