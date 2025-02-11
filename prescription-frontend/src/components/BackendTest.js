import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import PrescriptionService from '../service/PrescriptionService';

const BackendTest = () => {

    const [loding, setLoding] = useState(true);
            const [prescriptions, setPrescriptions] = useState(null);
            useEffect(()=>{
                const fatchData = async () =>{
                    setLoding(true)
                    try{
                        const response = await PrescriptionService.getUser();
                        console.log(response.data);
                        setPrescriptions(response.data);
                    }catch(error){
                        console.log(error);
                    }
                    setLoding(false)
                };
                fatchData();
            },[]);

  return (
    <div>
      
    </div>
  )
}

export default BackendTest
