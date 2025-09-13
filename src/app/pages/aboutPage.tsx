import { Link, useParams } from 'react-router'
import '../App.css'

function AboutPage() {
  const { thing } = useParams()

  return (
    <>
      <h1>
        ABOUT
        { thing ? ` ${thing}` : null }
      </h1>
      <li>
        <ul>
          <Link to="/">Go to index</Link>
        </ul>
        <ul>
          <Link to="/others">Go to others</Link>
        </ul>
        <ul>
          <Link to="/others/info">Go to others info</Link>
        </ul>
        <ul>
          <Link to="/others/gato">Go to others con GATO</Link>
        </ul>
      </li>
    </>
  )
}

export default AboutPage
