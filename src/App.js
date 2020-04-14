import React from 'react';
import Review from "./Review";
import './App.css';

const publicURL = 'https://swe432tomcat.herokuapp.com';
export const getLocationUrlData = () => {
  return {
      url:
          process.env.NODE_ENV === 'production'?
          publicURL
          :`${window.location.origin}`,
      hash: `${window.location.hash}`
  };
};
export const servicePath ='/a7';

function App(){
  return(
     <div>
        <Review />
     </div>
  );
}

export default App;
