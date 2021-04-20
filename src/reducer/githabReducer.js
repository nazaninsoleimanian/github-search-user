import {
 GET_PERSON_AUTHENTICATION_BEGIN, 
 GET_PERSON_AUTHENTICATION_SUCCESS, 
 GET_PERSON_AUTHENTICATION_ERROR,
} from '../actions'

const githubReducer = (state, action) => {

 
 if (action.type === GET_PERSON_AUTHENTICATION_BEGIN){
  return {...state, person_authentication_loading: true}
 }

 if (action.type === GET_PERSON_AUTHENTICATION_SUCCESS){
  return {...state, person_authentication_loading: false, person_authentication_error: false, isUserLogin: true, person_infos: action.payload.personInfo, repos: action.payload.repos}
 }

 if (action.type === GET_PERSON_AUTHENTICATION_ERROR){
  return {...state, person_authentication_loading: false, person_authentication_error: true, isUserLogin: false}
 }

 
 throw new Error(`No Matching "${action.type}" - action type`)
}

export default githubReducer
