import { createContext, useReducer } from "react";
import  githubReducer  from "./GithubReducer";

const GithubContext = createContext(); 

// eslint-disable-next-line react/prop-types
export const GithubProvider = ({children}) => {
   const initSate = {
      users: [],
      user: {},
      repos: [],
      loading: false,
   };

   const [state, dispatch] = useReducer(githubReducer, initSate);

   return <GithubContext.Provider value={{
      users: state.users,
      loading: state.loading,
      user: state.user,
      repos: state.repos,
      dispatch,
   }}>
      {children}
   </GithubContext.Provider>
}

export default GithubContext;