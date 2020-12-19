import React from 'react';

// mock-data
// import countryFoodData from './mock-data/countryFoodData';
import platform_segment_data from './mock-data/platform_segment_data';

// child components
// import FoodsByCountryBarChart from './components/charts/FoodsByCountryBarChart';
import PlatformSegmentsBarChart from './components/charts/PlatformSegmentsBarChart';

// styles
import './styles/app.css';

function App() {
  return (
    <div>
      <header className="app-header">
        <h1>Nivo Bar Chart</h1>
      </header>
      {/* <FoodsByCountryBarChart data={countryFoodData} /> */}
      <PlatformSegmentsBarChart data={platform_segment_data} />
    </div>
  );
}

export default App;
