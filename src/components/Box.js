import React, { useEffect, useState } from 'react';

const Box = ({ height, width , color , totalBoxes , coloredBoxesCount ,setColoredBoxesCount }) => {

  const [currentColor, setCurrentColor] = useState(color);
  const handleColorChange = () => {
    setColoredBoxesCount((prevCount) => prevCount + 1);
    setCurrentColor('pink');
  };

  useEffect(()=> {
    if(coloredBoxesCount === totalBoxes) {
        setTimeout(()=> {
            setCurrentColor('white');
            console.log("All boxes are colored");
            setColoredBoxesCount(0);
        },2000)
    }
  },[coloredBoxesCount])

  return (
    <button
      style={{
        backgroundColor: currentColor,
        width: width,
        height: height,
        margin: '10px',
        cursor: 'pointer',
      }}
      onClick={handleColorChange} 
      
    />
  );
};

export default Box;
