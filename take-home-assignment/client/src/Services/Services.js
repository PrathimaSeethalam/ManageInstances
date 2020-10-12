import axios from 'axios';

// import ServiceConstants from '../constants/ServiceConstants';

export const signInUser = data => {
  console.log (data);
  axios.post ('http://localhost:8080/api/register', {
    headers:{
      "Access-Control-Allow-Origin": "*"
    },
      data
  }
 
  );
}
