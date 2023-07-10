import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Header from './Header';
import Tetris from '../components/Tetris';
import './Header.css';

function NoMatch() {
    return (
        <div style={{ padding: 20 }}>
            <h2>404: Page Not Found</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <div>
                <Router>
                    <div className="router-header-container">
                    <div className='header-container'>
                        <Header />
                    </div>
                    <nav className='nav-container'>
                        <Link to="/" className="link-styles">
                            Home
                        </Link>
                        <Link to="/about" className="link-styles">
                            About
                        </Link>
                        <Link to="/tetris" className="link-styles">
                            Tetris
                        </Link>
                    </nav>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Tetris" element={<Tetris />} />
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </Router>

            </div>
            <div>

            </div>
        </div>

    );
}

function Home() {
    return (
        <div></div>
    );
}

export default App;