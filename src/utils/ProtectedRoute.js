/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useToken from './useToken';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = useToken();
  return (
    <Route
      {...rest}
      render={(props) => (token ? (<Component {...props} />) : (<Redirect to="/login" />))}
    />
  );
};

export default ProtectedRoute;
