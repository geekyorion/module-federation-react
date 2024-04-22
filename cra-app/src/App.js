import { lazy, Suspense } from 'react';
import './App.css';

const ChatMF = lazy(() => import('chatMF/Chat'));

function App() {
  return (
    <div className="App">
      <Suspense>
        <ChatMF />
      </Suspense>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
