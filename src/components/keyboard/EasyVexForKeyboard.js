import { useEffect, useState } from 'react';
import { Vex, Renderer } from 'vexflow';
import { VexForm } from './UI/VexForm';
// import { PlayCanned } from './PlayCanned';

// const { Factory } = Vex.Flow;



const EasyVexForKeyboard = ({ note }) => {
    const [timeSignature, setTimeSignature] = useState('4/4');

    const handleTimeSig = timeSignature => {
        setTimeSignature(timeSignature);
    };

    console.log(timeSignature)
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

        system.addStave({
            voices: [
              score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up'})),
              score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
            ]
          })
          .addClef('treble').addTimeSignature(timeSignature)
          
          system.addStave({
            voices: [
              score.voice(score.notes('C#3/q, B2, A2/8, B2, C#3, D3', {clef: 'bass', stem: 'up'})),
              score.voice(score.notes('C#2/h, C#2', {clef: 'bass', stem: 'down'}))
            ]
          }).addClef('bass').addTimeSignature(timeSignature);
          
          system.addConnector()
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
            <VexForm handleTimeSig={handleTimeSig} />
        </div>
    );
}

export default EasyVexForKeyboard;