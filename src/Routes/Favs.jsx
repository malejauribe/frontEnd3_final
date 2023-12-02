import React, { useReducer, useEffect } from "react";
import Card from "../Components/Card";
import { themeReducer, actionTypes, initialState } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favs, dispatch] = useReducer(themeReducer, []);
  //const { favs, isDarkTheme } = state;

  useEffect(() => {
    try {
      const favsArray = JSON.parse(localStorage.getItem('favs')) || [];
      dispatch({ type: actionTypes.GET_FAVS, payload: favsArray });
    } catch (error) {
      console.error('Error al cargar el array del localStorage:', error);
    }
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((odontologo) => (
          <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id} />
        ))}
      </div>
    </>
  );
};

export default Favs;
