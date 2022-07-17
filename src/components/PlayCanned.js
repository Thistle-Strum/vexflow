import * as Tone from 'tone';
import { synth } from './synth';

export const PlayCanned = (notes, notes2) => {
    const scale = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
    const upperStave = notes.map(n => scale[n]);
    const lowerStave = notes2.map(n => scale[n]);

    Tone.Transport.bpm.value = 400;

    function playChordSequence(synth, chordSequence) {
        return new Tone.Sequence(
            function (time, chord) {
                synth.triggerAttackRelease(chord, '16n', time);
            },
            chordSequence,
            '4n'
        );
    }

    const highVoice = playChordSequence(synth, upperStave);
    const lowVoice = playChordSequence(synth, lowerStave);

    highVoice.start();
    lowVoice.start();
};
