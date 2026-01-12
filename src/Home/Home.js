import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tetris from '../components/Tetris';

function App() {
    return (
        <div>
            <div>
                <Tetris />
            </div>
        </div>
    );
}

export default App;