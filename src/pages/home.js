import React from 'react';
import {requireAuth} from "../auth/requireAuth";



export const Home = () => {
  return(
      <div>
          <h1>Home</h1>
      </div>
  )
};


export default requireAuth(Home)