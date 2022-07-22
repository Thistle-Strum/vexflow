import {useState} from 'react';
import { Canned } from './Canned';
import _ from 'lodash';

import React from 'react'

const Permutation = ({permutate, play, stop}) => {
    const [notes, setNotes] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
    const [notes2, setNotes2] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  return (
    <div>
        <Canned notes={notes} notes2={notes2} />
        <button
            onClick={() => {
                setNotes(_.shuffle(notes));
                setNotes2(_.shuffle(notes2));
                permutate();
                play();
            }}
        >
            permutate
        </button>
        <button onClick={play}>Play</button>
        <button onClick={stop}>Stop</button>
    </div>
  )
}

export default Permutation