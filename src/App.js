import './App.css';
import Home from './components/home/Home';
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
            <h1>musicenviro</h1>
            <nav className="navbar">
                <li>
                    <Link to="/">Home</Link>
                </li>
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
                <Route path="/" element={<Home />} />
                <Route path="/permutation" element={<Permutation permutate={permutate} play={play} stop={stop} />} />
                <Route path="/keyboard" element={<Keyboard />} />
                <Route path="/button-grid" element={<ButtonGrid />} />
            </Routes>
        </div>
    );
}

export default App;
