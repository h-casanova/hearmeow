import { Link } from 'react-router'
import './App.css'

function App() {
  return (
    <>
      <h1>App Home</h1>
      <div>
        <Link to="/about">Go to ABOUT</Link>
      </div>
    </>
  )
}

export default App
