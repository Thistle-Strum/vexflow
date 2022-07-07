
import './App.css';
import { Score }  from './components/Score';
import { Canned } from './components/Canned';
import { useState } from 'react'
import _ from 'lodash'
import * as Tone from 'tone'



function App() {

  const [notes, setNotes] = useState([0,1,2,3,4,5,6,7]);
  const [notes2, setNotes2] = useState([0,1,2,3,4,5,6,7]);
  // const [ playButton, setPlayButton ] = useState(false);

  const play = () => {
    // console.log('yes')
    // setPlayButton(true);
    // Tone.Transport.stop()
    // Tone.Transport.cancel()
    // Tone.Transport.clear()
    Tone.start()
    Tone.Transport.start('+0.1');
  }
    
  const stop = () => {
      Tone.Transport.stop()
      Tone.Transport.cancel();
      // setPlayButton(false);
    }

  const permutate = () => {
    Tone.Transport.cancel();
    
  }


  return (
    <div>
    {/* <Score
        staves={[
          ['g4', 'd4', 'e4', 'd4'],
          ['a4', 'd4', 'e4', 'd4'],
          ['a4', 'a4', 'b4', 'a4'],
          ['d4', 'e4', ['g3', '2']]
        ]}
      /> */}
    <Canned 
      notes={notes} 
      notes2={notes2}
      // setPlayButton={setPlayButton}
    />
    <button
      onClick={() => {
        setNotes(_.shuffle(notes));
        setNotes2(_.shuffle(notes2));
        permutate();
        play()
        }}
    >permutate</button>
    <button
      onClick={play}
    >Play</button>
    <button
      onClick={stop}>Stop</button>
    </div>

  )


}

export default App;