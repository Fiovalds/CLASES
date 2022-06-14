import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data.js";

function App() {
  const cards = data.map(item => {return(
    <Card
      key = {item.id}
      xitem = {item}
     />
  )})
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;