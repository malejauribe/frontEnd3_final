import React, { useReducer, useEffect } from 'react'
import Card from '../Components/Card'
import { themeReducer, actionTypes, initialState } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = (theme) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const { data, isDarkTheme } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await response.json();
        dispatch({ type: actionTypes.SET_DATA, payload: jsonData });
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="" >
      <h1>Home {isDarkTheme}</h1>
      <div className='card-grid'>
      {data.map(odontologo => (
        <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id} />
      ))}
      </div>
    </main>
  )
}

export default Home