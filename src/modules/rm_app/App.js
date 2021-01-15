import './App.css';
import ReactiveNavigation from '../rm_navigation/rm_navigation';
import ReactiveToDo from '../rm_todo/rm_todo';

function App() {
  return (
    <div className="rm-app">
      <ReactiveNavigation></ReactiveNavigation>

      <main className="rm-main">
        <div className="rm-main-container">
            <div className="rm-showcase-slot">
              <div className="rm-showcase-slot-container">
                <ReactiveToDo></ReactiveToDo>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
