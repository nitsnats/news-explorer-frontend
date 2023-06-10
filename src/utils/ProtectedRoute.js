// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';

// function ProtectedRoute({ component: Component, ...props }) {
//   return (
//     <Routes>
//     <Route>
//       {() =>
//         props.isLoggedIn ? <Component {...props} /> : <Navigate to='./' />
//       }
//     </Route>
//     </Routes>
//   );
// }

// export default ProtectedRoute;

import { Navigate } from "react-router-dom"


 function ProtectedRoute({ isLoggedIn, component: Component, ...props }) {



  return (
    <>

      {

        isLoggedIn ? <Component {...props} isLoggedIn={isLoggedIn} /> : <Navigate to='./' />

      }
    </>
  )
}
export default ProtectedRoute;