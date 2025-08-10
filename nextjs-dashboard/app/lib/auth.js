// lib/auth.js
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from "uuid"

export const isAuthenticated = () => {
  let authenticated = false
  const token = Cookies.get('token'); // or whatever your token is
  if (token) {
    authenticated = true 
    return authenticated
  } else {
    return authenticated = false;
  }

}

export const login = () => {
  const token = uuidv4()
  Cookies.set('token', token); // 1 day expiration for the JWT
}

export const logout = () => {
  Cookies.remove('token')
}
