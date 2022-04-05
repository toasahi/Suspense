import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <h1 className="text-5xl">React App!</h1>
      <Suspense fallback={<p>Loading</p>}></Suspense>
    </div>
  );
}

export default App;
