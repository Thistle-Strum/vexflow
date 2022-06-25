
import './App.css';
import { Score }  from './components/Score';
import { Canned } from './components/Canned';
import { useState } from 'react'
import _ from 'lodash'


function App() {

  const [notes, setNotes] = useState([0,1,2,3,4,5,6,7]);
  const [notes2, setNotes2] = useState([0,1,2,3,4,5,6,7]);

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
    <Canned notes={notes} notes2={notes2}></Canned>
    <button
      onClick={() => {
        setNotes(_.shuffle(notes));
        setNotes2(_.shuffle(notes2));
        }}
    >permutate
    </button>
    </div>

  )


}

export default App;