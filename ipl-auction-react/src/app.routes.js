import React from 'react';
import permission from './path.json';
import { Redirect, Route } from "react-router-dom"; 

const ProtectedRoute = ({ component: Component, role, path, ...rest}) => {
  const validatePath = (path) => {
    const index = permission.role.indexOf(path);
    return (index !== -1)
  }
  return (
    <Route path={path} {...rest} 
      render={props => {
       return validatePath() 
      ? <Component {...props}/> 
      : <Redirect to="/" />;
    }} />
  );
}

export default ProtectedRoute;