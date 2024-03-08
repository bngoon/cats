import { useState, useEffect } from 'react';
import { getCats } from "../services/cats.js";
import Cat from '../components/Cat.jsx';

function Cats() {
  const [cats, setCats] = useState([])

  async function fetchCats() {
    const allCats = await getCats()
    setCats(allCats)
  }

  useEffect(() => {
    fetchCats()
  }, [])

  return (
    <div>
      <h1>All the Cats!</h1>
      <div className="cats-container">
        {
          cats.map((cat) => (
            <Cat cat={cat} key={cat._id} />
          ))
        }
      </div>
    </div>
  )
}

export default Cats