import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Oklahoma&appid=4676da13ec633ac973da403ba71b2c54');
      const data = await res.json();

      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="card">
      <p>Current City: {data?.name}</p>
      <p>Current Temperature: {data?.main?.temp} Kelvin</p>
    </div>
  )
}

export default App
