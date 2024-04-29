import React, { useState } from 'react';

const zarResimler = [
  './src/images/dice-faces-one.png',
  './src/images/dice-faces-two.png',
  './src/images/dice-faces-three.png',
  './src/images/dice-faces-four.png',
  './src/images/dice-faces-five.png',
  './src/images/dice-faces-six.png'
];
const Zar = () => {
  const [zar1Index, setZar1Index] = useState(zarResimler[0]);
  const [zar2Index, setZar2Index] = useState(zarResimler[0]);

  const zarAt = () => {
    const rasgeleIndex1 = Math.floor(Math.random() * 6);
    const rasgeleIndex2 = Math.floor(Math.random() * 6);
    setZar1Index(rasgeleIndex1);
    setZar2Index(rasgeleIndex2);
  };

  return (
    <div>
      <h1>Random 2 Zər</h1>
      <button onClick={zarAt}>Zərləri At</button>
      <div>
          <img src={zarResimler[zar1Index]} alt=''/>
          <img src={zarResimler[zar2Index]} alt=''/>
      </div>
    </div>
  );
};

export default Zar;