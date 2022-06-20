
import './App.css';
import { Score }  from './components/Score';

function App() {
  return (
    <div>
    <Score
        staves={[
          ['g4', 'd4', 'e4', 'd4'],
          ['a4', 'd4', 'e4', 'd4'],
          ['a4', 'a4', 'b4', 'a4'],
          ['d4', 'e4', ['g3', '2']]
        ]}
      />
    </div>
  )
}

export default App;