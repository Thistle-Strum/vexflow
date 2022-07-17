import { useEffect, useState } from 'react';
import { Vex, StaveNote, Voice, Formatter, Accidental } from 'vexflow';

import { VexForm } from './UI/VexForm';
import { PlayCanned } from './PlayCanned';

export const VexForKeyboard = ({ keyboardNotes }) => {
    const [timeSignature, setTimeSignature] = useState('4/4');

    const handleTimeSig = timeSignature => {
        setTimeSignature(timeSignature);
    };

    useEffect(() => {
        const parent = document.getElementById('vexForKeyboard');

        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }

        const { Renderer, Stave } = Vex.Flow;
        const div = document.getElementById('vexForKeyboard');
        const renderer = new Renderer(div, Renderer.Backends.SVG);
        renderer.resize(500, 250);
        const ctx = renderer.getContext();
        const topStave = new Stave(50, 40, 400);
        const bottomStave = new Stave(50, 100, 400);
        const brace = new Vex.Flow.StaveConnector(topStave, bottomStave).setType(3);
        const lineLeft = new Vex.Flow.StaveConnector(topStave, bottomStave).setType(1);
        const lineRight = new Vex.Flow.StaveConnector(topStave, bottomStave).setType(6);

        // topStave.addClef("treble")
        // bottomStave.addClef("bass")
        topStave.addClef('treble').addTimeSignature(timeSignature);
        bottomStave.addClef('bass').addTimeSignature(timeSignature);

        const accessTimeSig = timeSignature.split('/');
        const numerator = accessTimeSig[0];
        const denominator = accessTimeSig[1];

        console.log(numerator, denominator);

        const noteSequence =
            keyboardNotes.length < +numerator
                ? keyboardNotes.concat(Array(+numerator - keyboardNotes.length).fill(72))
                : keyboardNotes;

        const noteNames = noteSequence.map(midiPitchToNoteName);

        const topNotes = noteNames.map(note => {
            if (note[1] === '#' && note.charAt(note.length - 1) === '4') {
                return new StaveNote({ keys: [note], duration: denominator }).addModifier(new Accidental('#'));
            }
            if (note[1] === '#' && note.charAt(note.length - 1) === '5') {
                return new StaveNote({ keys: [note], duration: denominator }).addModifier(new Accidental('#'));
            }
            if (note.charAt(note.length - 1) === '4' || note.charAt(note.length - 1) === '5') {
                return new StaveNote({ keys: [note], duration: denominator });
            } else {
                return new StaveNote({ keys: [note], duration: denominator + 'r' });
            }
        });

        const bottomNotes = noteNames.map(note => {
            if (note[1] === '#' && note.charAt(note.length - 1) === '2') {
                return new StaveNote({ keys: [note], duration: denominator, stem_direction: -1 }).addModifier(
                    new Accidental('#')
                );
            }
            if (note[1] === '#' && note.charAt(note.length - 1) === '3') {
                return new StaveNote({ keys: [note], duration: denominator, stem_direction: -1 }).addModifier(
                    new Accidental('#')
                );
            }
            if (note.charAt(note.length - 1) === '2' || note.charAt(note.length - 1) === '3') {
                return new StaveNote({ keys: [note], duration: denominator, stem_direction: -1 });
            } else {
                return new StaveNote({ keys: [note], duration: denominator + 'r' });
            }
        });

        // Create a voice in 4/4 and add above notes
        const topVoice = new Voice({ num_beats: +numerator, beat_value: +denominator }).addTickables(topNotes);

        // Create a voice in 4/4 and add above notes
        const bottomVoice = new Voice({ num_beats: +numerator, beat_value: +denominator }).addTickables(bottomNotes);

        // Format and justify the notes to 400 pixels.
        new Formatter().joinVoices([topVoice]).format([topVoice], 350);
        new Formatter().joinVoices([bottomVoice]).format([bottomVoice], 350);
        // Render voice

        topStave.setContext(ctx).draw();
        bottomStave.setContext(ctx).draw();
        brace.setContext(ctx).draw();
        lineLeft.setContext(ctx).draw();
        lineRight.setContext(ctx).draw();
        // topVoice.draw(ctx, topStave, bottomStave);
        topVoice.draw(ctx, topStave);
        bottomVoice.draw(ctx, bottomStave);
    }, [keyboardNotes, timeSignature]);

    //   PlayCanned(notes, notes2);

    return (
        <div>
            <div id="vexForKeyboard"></div>
            <VexForm handleTimeSig={handleTimeSig} />
        </div>
    );
};

export default VexForKeyboard;

function midiPitchToNoteName(note) {
    const scale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const octave = Math.floor(note / 12) - 1;
    return scale[note % 12] + '/' + octave;
}
