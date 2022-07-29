import { useEffect, useState } from 'react';
import { Vex } from 'vexflow';
import { VexForm } from './UI/VexForm';
// import { PlayCanned } from './PlayCanned';

const EasyVexForKeyboard = ({ note }) => {
    const [timeSignature, setTimeSignature] = useState('4/4');
    const [numberOfVoices, setNumberOfVoices] = useState('2');

    const handleTimeSig = timeSignature => {
        setTimeSignature(timeSignature);
    };

    const handleNumberOfVoices = numberOfVoices => {
        setNumberOfVoices(numberOfVoices);
    };
    console.log(numberOfVoices);
    useEffect(() => {
        const parent = document.getElementById('easyVexKey');
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }

        // function midiPitchToNoteName(note) {
        //     const scale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        //     const octave = Math.floor(note / 12) - 1;
        //     return scale[note % 12] + '/' + octave;
        // }

        const vf = new Vex.Flow.Factory({ renderer: { elementId: 'easyVexKey' } });
        const score = vf.EasyScore();
        const system = vf.System();

        const accessTimeSig = timeSignature.split('/');
        const numerator = accessTimeSig[0];
        const denominator = accessTimeSig[1];

        console.log(numerator, denominator);

        const fillTrebleStaveWithRests = (numerator, denominator) => {
            return Array(+numerator).fill('B4/' + denominator + '/r');
        };

        const restsForTrebleClef = fillTrebleStaveWithRests(numerator, denominator).toString();

        console.log(restsForTrebleClef);
        system
            .addStave({
                voices: [score.voice(score.notes(restsForTrebleClef, { stem: 'up' }))]
            })
            .addClef('treble')
            .addTimeSignature(timeSignature);

        const fillBassStaveWithRests = (numerator, denominator) => {
            return Array(+numerator).fill('D3/' + denominator + '/r');
        };

        const restsForBassClef = fillBassStaveWithRests(numerator, denominator).toString();
        system
            .addStave({
                voices: [score.voice(score.notes(restsForBassClef, { clef: 'bass', stem: 'up' }))]
            })
            .addClef('bass')
            .addTimeSignature(timeSignature);

        system.addConnector();
        vf.draw();

        // const noteString = [scale[notes[0]] + '/8', ...notes.slice(1).map(n => scale[n])].join();

        // const noteString2 = [scale[notes2[0]] + '/8', ...notes2.slice(1).map(n => scale[n])].join();

        // system.addStave({
        //     voices: [score.voice(score.notes())]
        // });
        // system.addConnector('singleLeft');

        // system.addStave({
        //     voices: [score.voice(score.notes(noteString2))]
        // });
        // system.addConnector('singleLeft');
        // system.addConnector('singleRight');

        // vf.draw();
    }, [note, timeSignature]);

    // PlayCanned(notes, notes2);

    return (
        <div>
            <div id="easyVexKey"></div>
            <VexForm handleTimeSig={handleTimeSig} handelNumberOfVoices={handleNumberOfVoices} />
        </div>
    );
};

export default EasyVexForKeyboard;
