import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Routes>
    <Route>
      {() =>
        props.isLoggedIn ? <Component {...props} /> : <Navigate to='./' />
      }
    </Route>
    </Routes>
  );
}

export default ProtectedRoute;