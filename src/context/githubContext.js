import React, { createContext, useContext, useReducer } from 'react';

import axios from 'axios'

import githubReducer from '../reducer/githabReducer'

import {
 GET_PERSON_AUTHENTICATION_BEGIN, 
 GET_PERSON_AUTHENTICATION_SUCCESS, 
 GET_PERSON_AUTHENTICATION_ERROR
} from '../actions'

const GithubContext = createContext()
export const useGithubContext = () => useContext(GithubContext)


const initialState = {
  isUserLogin: false,
  person_authentication_loading: false,
  person_authentication_error: false,
  person_infos: {},
  repos: [],
}
const GithubProvider = ({children}) => {

const [state, dispatch] = useReducer(githubReducer, initialState);

const fetchUsername = async(url) => {
    dispatch({type: GET_PERSON_AUTHENTICATION_BEGIN})
    try{
      const [personInfo, repos] = await Promise.all([
      axios.get(url), axios.get(`${url}/repos`)])
      dispatch({type: GET_PERSON_AUTHENTICATION_SUCCESS, payload: {personInfo: personInfo.data, repos: repos.data}})
    }catch(error){
      dispatch({type: GET_PERSON_AUTHENTICATION_ERROR})
    }
  }
 return <GithubContext.Provider value={{...state, fetchUsername}}>{children}</GithubContext.Provider>
}

export default GithubProvider;