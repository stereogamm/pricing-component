import '../styles/App.css';
import data from './data';

import Card from './Card';
import Toggle from './Toggle';


function App() {
  
  return (
    <>
      <main className='main'>
        <h1>Our Pricing</h1>
        <Toggle />
        <Card data={data}/>
      </main> 
    </>
  )
}

export default App
