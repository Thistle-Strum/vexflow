import './App.css';
import Permutation from './components/permutation/Permutation';
import Keyboard from './components/keyboard/Keyboard';
import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import * as Tone from 'tone';
import { ButtonGrid } from '@musicenviro/ui-elements';

// setInterval(() => {
//   console.log(Tone.Transport.position);
// }, 100);

function App() {
    const [audioStarted, setAudioStarted] = useState(false);

    const play = async () => {
        if (!audioStarted) {
            await Tone.start();
            console.log('context started');
            setAudioStarted(true);
        }
        Tone.Transport.start();
    };

    const stop = () => {
        Tone.Transport.pause();
    };

    const permutate = () => {
        Tone.Transport.cancel();
    };

    return (
        <div>
            <h1>Name of Application?</h1>

            <nav>
                <li>
                    <Link to="/permutation">Permutation</Link>
                </li>
                <li>
                    <Link to="/keyboard">Keyboard</Link>
                </li>
                <li>
                    <Link to="/button-grid">ButtonGrid</Link>
                </li>
            </nav>
            <Routes>
                <Route path="/permutation" element={<Permutation permutate={permutate} play={play} stop={stop} />} />
                <Route path="/keyboard" element={<Keyboard />}></Route>
                <Route path="/button-grid" element={<ButtonGrid />}></Route>
            </Routes>
        </div>
    );
}

export default App;
