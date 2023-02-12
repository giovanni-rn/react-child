import Header from "./components/Header";
import Card from "./components/Card";
import poulets from "./assets/store.json";

const App = () => {
  return (
    <div className="App">
      <Header />
      {poulets.map((poulet) => (
        <Card key={poulet.name} title={poulet.name} text={poulet.description} />
      ))}
    </div>
  );
};

export default App;
