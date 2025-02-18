import React, { useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import PrescriptionService from '../service/PrescriptionService';

const EditPrescription = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [prescription, setPrescription] = useState({
            id:id,
            prescriptionDate:"",
            patientName:"",
            patientAge:"",
            patientGender:"",
            diagnosis:"",
            medicines:"",
            nextVisitDate:""
        });

        const handleChange = (e) =>{
            const value = e.target.value;
            setPrescription({...prescription, [e.target.name]:value})
        }
        useEffect(()=>{
            const fatchData = async () =>{
                
                try{
                    const response = await PrescriptionService.getUserById(prescription.id);
                    setPrescription(response.data);
                }catch(error){
                    navigate("/");
                    console.log(error);
                }
                
            };
            fatchData();
        },[]);

    const savePrescription = (e) =>{
        e.preventDefault();
        PrescriptionService.editPrescription(prescription, id)
        .then((response) =>{
            console.log(response);
            navigate("/prescriptionList");
        })
        .catch((error)=>{
            navigate("/");
            console.log(error);
        })
    }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Update Prescription</h1>
      </div>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-6 mt-6 space-y-4">
        <input onChange={(e)=>handleChange(e)} value={prescription.id} type="number" name='id' placeholder='Id' className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"></input>
        <input onChange={(e)=>handleChange(e)} value={prescription.prescriptionDate} type="text" name='prescriptionDate' placeholder='prescriptionDate' className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"></input>
        <input onChange={(e)=>handleChange(e)} value={prescription.patientName} type='text' name='patientName' placeholder='patientName' className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"></input>
        <input onChange={(e)=>handleChange(e)} value={prescription.patientAge} type='number' name='patientAge' placeholder='patientAge' className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"></input>
        <input onChange={(e)=>handleChange(e)} value={prescription.patientGender} type='text' name='patientGender' placeholder='patientGender' className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"></input>
        <input onChange={(e)=>handleChange(e)} value={prescription.diagnosis} type='text' name='diagnosis' placeholder='diagnosis' className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"></input>
        <input onChange={(e)=>handleChange(e)} value={prescription.medicines} type='text' name='medicines' placeholder='medicines' className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"></input>
        <input onChange={(e)=>handleChange(e)} value={prescription.nextVisitDate} type='text' name='nextVisitDate' placeholder='nextVisitDate' className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"></input>
      </div>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-6 mt-6 flex justify-between">
        <button onClick={savePrescription} className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Save</button>
        <button onClick={()=>navigate("/prescriptionList")} className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Cancel</button>
      </div>
    </div>
  )
}

export default EditPrescription
