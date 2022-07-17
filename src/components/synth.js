import * as Tone from 'tone';
export const synth = new Tone.PolySynth().toDestination();
synth.set({ envelope: { release: 0.01 } });
