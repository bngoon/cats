import { useState, useEffect } from 'react';
import { getCat, deleteCat } from "../services/cats.js";
import { Link, useParams, useNavigate } from "react-router-dom";

function CatDetail() {
  const [cat, setCat] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()

  const fetchCat = async () => {
    const oneCat = await getCat(id)
    setCat(oneCat)
  }

  useEffect(() => {
    fetchCat()
  }, [])

  const handleDelete = async () => {
    await deleteCat(id)
    navigate("/cats")
  }

  return (
    <div>
      <h1>Hello, I'm {cat.name}</h1>
      <h2>{cat.aka}</h2>
      <img src={cat.image} alt={cat.name} />
      <p>{cat.age}</p>
      <p>{cat.gender}</p>
      <p>{cat.species}</p>
      <p>{cat.bio}</p>
      {
        cat.likesCuddles ? 
          <p>I love me some cuddles</p> :
          <p>Get the heck away from me!</p> 
      }
      <div>
        <Link to={`/cats/${id}/edit`}>
          <button>EDIT</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  )
}

export default CatDetail