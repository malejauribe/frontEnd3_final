import { createContext, useReducer } from "react";

export const actionTypes = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  SET_DATA: 'SET_DATA',
  SET_DETAIL: 'SET_DETAIL',
  GET_FAVS: 'GET_FAVS',
};

export const initialState = {theme: "light", data: []}

export const themeReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return { ...state, isDarkTheme: !state.isDarkTheme };
    case actionTypes.SET_DATA:
      return {...state, data: action.payload};
    case actionTypes.SET_DETAIL:
      return action.payload;
    case actionTypes.GET_FAVS:
      return action.payload;
    default:
      return state;
  }
};

export const ContextGlobal = createContext({
  theme: "light",
  updateTheme: () => {},
});

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { isDarkTheme: 'light' });
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
