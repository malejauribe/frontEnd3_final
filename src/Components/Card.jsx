import React from "react";
import { Link } from 'react-router-dom';


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const newFav = {
      name,
      username,
      id
    }
    const favsArray = JSON.parse(localStorage.getItem('favs')) || [];

    const indiceElemento = favsArray.findIndex((elemento) => elemento.id === id);
    if(indiceElemento !== -1) {
      favsArray.splice(indiceElemento, 1);
      alert('Quitado de favoritos')
    } else {
      favsArray.push(newFav);
      alert('Agregado a favoritos')
    }

    localStorage.setItem('favs', JSON.stringify(favsArray))
  }

  return (
    <div className="card">
        <Link key={id} to={`/dentista/${id}`}>
          <img className="img-card-doctor" src="/images/doctor.jpg" alt={username} />
        </Link>
        <h4>{name}</h4>
        <p>{username}</p>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
