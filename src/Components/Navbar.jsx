import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import { initialState, themeReducer, actionTypes } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const [state, dispatch] = useReducer(themeReducer, initialState)

  const changeTheme = () => {
    dispatch({ type: actionTypes.TOGGLE_THEME })
  }

  return (
    <nav className={state.isDarkTheme ? 'dark' : 'light'}>
      <div className="logo">
          <img src="/images/DH.png" alt="Logo" />
          <span>Odonto</span>
      </div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/favs">Favs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className='icon-button' onClick={changeTheme}> <img className='ico-theme' src={state.isDarkTheme ? 'images/sun2.png' : '/images/moon5.png'}/></button>
    </nav>
  )
}

export default Navbar