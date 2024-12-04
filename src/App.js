import React from 'react'
import Box from './components/Box'
import backGroundImageStored from './components/background.avif'
const App = () => {
  const totalBoxes = 5;
  const [coloredBoxesCount, setColoredBoxesCount] = React.useState(0);
  const style = {
    backgroundImage  : `url(${backGroundImageStored})`,
    textAlign:'center'   ,
    minHeight:'100vh',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
  }
  return (
    <div style={style}>
      {[...Array(5)].map((_, index) => (
        <Box key={index} height="200px" width="200px" totalBoxes={totalBoxes} coloredBoxesCount={coloredBoxesCount} setColoredBoxesCount ={setColoredBoxesCount} color='white'/>
      ))}
    </div>
  )
}

export default App
