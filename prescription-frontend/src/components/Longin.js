import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import UserService from '../service/UserService'
import axios from "axios";

function Longin() {
    const [user, setUser] = useState({
            name:"",
            password:""
        });
    const [error, setError] = useState("");

    const handleChange = (e) =>{
        const value = e.target.value;
        setUser({...user, [e.target.name]:value})
    }
    const lognUser = (e) =>{
        e.preventDefault();
        UserService.lognUser(user)
        .then((response) =>{
            const token = response.data;
            localStorage.setItem('jwtToken', token);

            console.log(localStorage.getItem('jwtToken'));
            navigate("/prescriptionList");
          //   const fetchData = async () => {
          //     try {
          //         const response = await axios.get('http://localhost:8080/prescription', {
          //             headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}` }
          //         });
          //         console.log(response.data);
          //     } catch (error) {
          //         alert('Unauthorized');
          //     }
          // };
          // fetchData();

            //navigate("/back-test");
        })
        .catch((error)=>{
            console.log(error);
            setError("Invalid username or password"); 
        })
    }
    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-3xl font-bold text-blue-600 mb-8">
        Login Page
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <input onChange={(e)=>handleChange(e)} value={user.name} type="text" name='name' placeholder='Enter your name...' required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
        <input onChange={(e)=>handleChange(e)} value={user.password} type='password' name='password' placeholder='Enter your password...' required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
      </div>
      <div className="mt-8 space-x-4">
        <button onClick={lognUser} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>      
        <button onClick={()=>navigate("/")} className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">Cancel</button>
      </div>
    </div>
  )
}

export default Longin
