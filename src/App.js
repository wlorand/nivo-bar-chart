import React from 'react';

// mock-data
import countryFoodData from './mock-data/countryFoodData';

// child component
import FoodsByCountryBarChart from './components/charts/FoodsByCountryBarChart';

// styles
import './styles/app.css';

function App() {
  return (
    <div>
      <header className="app-header">
        <h1>Nivo Bar Chart</h1>
      </header>
      <FoodsByCountryBarChart data={countryFoodData} />
    </div>
  );
}

export default App;
