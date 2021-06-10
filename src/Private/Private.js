import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from './../App';

const Private = ({ children, ...rest }) => {

  const [logInUser, setLogInUser] = useContext(userContext);

  return (

    <Route
      {...rest}

      render={({ location }) =>
        logInUser.email ? (

          children

        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />

  );
};

export default Private;