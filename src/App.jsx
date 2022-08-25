import React, { useEffect, useState } from 'react'
import { } from 'bootstrap';
import RedButton from './Components/RedButton';
import 'bootstrap/dist/css/bootstrap.min.css'
import BlueButton from './Components/BlueButton';
import YellowButton from './Components/YellowButton';
import BlackButton from './Components/BlackButton';

function App() {

  const [color, setColor] = useState('green');

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color])



  return (
    <div className="container-fluid">

      <div className='row text-center mt-5'>

        <RedButton setColor={setColor} />

        <BlueButton setColor={setColor} />

        <YellowButton setColor={setColor} />

        <BlackButton setColor={setColor} />
        
      </div>

    </div>
  );
}

export default App;
