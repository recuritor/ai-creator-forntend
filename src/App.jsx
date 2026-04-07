import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <h1>AI Creator Frontend</h1>
      <p>Welcome to your new React app.</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
    </main>
  );
}

export default App;
