import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {() =>
        props.isLoggedIn ? <Component {...props} /> : <Redirect to='./' />
      }
    </Route>
  );
}

// export default ProtectedRoute;
// import {React} from 'react';
// import { Redirect } from "react-router-dom";
// import { Spinner } from 'reactstrap';

// const ProtectedRoute = ({ isLoggedIn, children, isCheckingToken }) => {
//     return (
//         isCheckingToken ? <Spinner/> : isLoggedIn ? children : <Redirect to='/signin' />
//   )
// }

export default ProtectedRoute;