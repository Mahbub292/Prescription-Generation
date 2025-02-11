
import axios from "axios";
const BASE_URL = "http://localhost:8080/prescription";

class PrescriptionService{
  getPrescription(){
    
    return axios.get(BASE_URL, {
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('jwtToken') // Example
      }
  })
  .catch((error) => {
    console.log(error);
  });

}  
getUserById(id){
  return axios.get(BASE_URL + "/" + id, {
    headers: {
      'Authorization' :'Bearer ' + localStorage.getItem('jwtToken')
    }
  })
  .catch((error) => {
    console.log(error);
  });
}
  deletePrescription(id){
    
    return axios.delete(BASE_URL + "/" + id, {
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('jwtToken') // Example
      }
  })
  .catch((error) => {
    console.log(error);
  });
  }
  editPrescription(prescription, id){
    
    return axios.put(BASE_URL + "/" + id, prescription, {
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('jwtToken') // Example
      }
  })
  .catch((error) => {
    console.log(error);
  });
  }

  savePrescription(prescription){
    
    return axios.post(BASE_URL, prescription, {
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('jwtToken') // Example
      }
  })
  .catch((error) => {
    console.log(error);
  });
  }
    
    // getUser(){
    //     const token = localStorage.getItem('jwtToken');
    //     console.log("getUser()", token);
        
    //     return axios.get('http://localhost:8080/prescription', {
    //       headers: {
    //           'Authorization': 'Bearer ' + localStorage.getItem('token') // Example
    //       },
    //       withCredentials: true // Important!
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    
        
    // }
}
export default new PrescriptionService();