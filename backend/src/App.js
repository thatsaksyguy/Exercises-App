// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';

// Define the function that renders the content in routes using State.
function App() {

    const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>

          <header>
            <h1>Exercise Lister 3000 by Jonathan Saks</h1>
            <p>Trying to get buff? Need a list maker? LOOK NO FURTHER!.</p>
          </header>

          <Navigation />

          <main>
            <Route path="/" exact>
              <HomePage setExercise={setExercise} />
            </Route>

            <Route path="/add-exercise">
              <CreateExercisePage />
            </Route>
            
            <Route path="/edit-exercise">
              <EditExercisePage exercise={exercise} />
            </Route>
          </main>

          <footer>
            <p>Last edited on July 23. <cite>&copy; 2022 by Jonathan Saks</cite>.</p>
          </footer>

      </Router>
    </>
  );
}

export default App;