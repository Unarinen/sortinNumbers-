import React, { useState } from 'react';

const NumberInput = ({ onSubmit }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    setError('');
  };

  const handleSubmit = () => {
    const isValid = /^[\d,]+$/.test(input);
    if (!isValid) {
      setError('Error: Input should only contain numbers.');
      return;
    }

    const numberArray = input.split(',').map(Number).filter(Boolean);
    onSubmit(numberArray);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter comma-separated numbers"
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default NumberInput;
