//input
import React, { useState } from 'react';
import NumberInput from './NumberInput';

const App = () => {
  const [sortedNumbers, setSortedNumbers] = useState([]);

  const handleSort = (numbers) => {
    const sorted = numbers.sort((a, b) => b - a);
    setSortedNumbers(sorted);
  };

  return (
    <div>
      <h1>Number Sorter</h1>
      <NumberInput onSubmit={handleSort} />
      {sortedNumbers.length > 0 && (
        <div>
          <h2>Sorted Numbers (Descending):</h2>
          <p>{sortedNumbers.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default App;