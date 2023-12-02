import React, { useReducer, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { themeReducer, actionTypes } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detail, dispatch] = useReducer(themeReducer, []);
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const jsonData = await response.json();
        dispatch({ type: actionTypes.SET_DETAIL, payload: jsonData });
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div>
      <h1>Detail Dentist id {detail.id}</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{detail.name}</td>
            <td>{detail.email}</td>
            <td>{detail.phone}</td>
            <td>{detail.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail