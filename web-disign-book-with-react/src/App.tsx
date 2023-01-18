import ComponentsCollector from "./pages/ComponentsCollector";

import Index from "./components/YankeeHedgehog/Index";

function App() {
  return (
    <div className="App">
      <main style={{ textAlign: "center" }}>
        <ComponentsCollector />

        <h2>YankeeHedgehog's Components</h2>
        <Index></Index>
      </main>
    </div>
  );
}

export default App;
