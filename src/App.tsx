import "./App.css";
import { AlwaysSuspend } from "./AlwaysSuspend";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading</p>}>
        <AlwaysSuspend />
      </Suspense>
    </div>
  );
}

export default App;
