import './App.css';
import Card from './Card'
import placeData from "./vacationSpots"

// Extra Credit
// Change the background color of your card depending on the timeToGo property.
// Give each card 1, 2, or 3 dollar signs ($) depending on if it's less than $500, less than $1000, or more than $1000

function App() {
  const placeComponents = placeData.map(location => {
    return <Card key={location.place} place={location.place} price={location.price} timeToGo={location.timeToGo}/>
  })

  return (
    <div className="App">
      {placeComponents}
    </div>
  );
}

export default App;
