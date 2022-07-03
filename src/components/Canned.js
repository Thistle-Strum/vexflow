import { useEffect } from "react";
import { Vex } from "vexflow";
import { PlayCanned } from './PlayCanned';

const { Factory } = Vex.Flow;

const scale = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];

export function Canned({
  notes = [0, 3, 1, 4, 2, 5, 3, 6],
  notes2 = [0, 3, 1, 4, 2, 5, 3, 6],
}) {

  useEffect(() => {
    const parent = document.getElementById("output");
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }

    const vf = new Factory({ renderer: { elementId: "output" } });
    const score = vf.EasyScore();
    const system = vf.System();

    const noteString = [
      scale[notes[0]] + "/8",
      ...notes.slice(1).map((n) => scale[n]),
    ].join();

    const noteString2 = [
      scale[notes2[0]] + "/8",
      ...notes2.slice(1).map((n) => scale[n]),
    ].join();

    system.addStave({
      voices: [score.voice(score.notes(noteString))],
    });

    system.addStave({
      voices: [score.voice(score.notes(noteString2))],
    });
    
    vf.draw();
  }, [notes, notes2]);
  
  PlayCanned(notes, notes2);

  return (
    <div>
      <div id="output"></div>
    </div>
  );
}
