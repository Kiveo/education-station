import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NoRoute = () => {
  return ( 
    <Fragment>
      <h1>No Such Route Found</h1>
      <Link to="/">Back To School</Link>
    </Fragment>
   );
}
 
export default NoRoute;