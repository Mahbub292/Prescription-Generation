import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import PrescriptionService from '../service/PrescriptionService';

const AddPrescription = () => {
    const [prescription, setPrescription] = useState({
                id:"",
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
    const reset = (e) =>{
        e.preventDefault();
        setPrescription({
            id:"",
            prescriptionDate:"",
            patientName:"",
            patientAge:"",
            patientGender:"",
            diagnosis:"",
            medicines:"",
            nextVisitDate:""
        })
    }
    const savePrescription = (e) =>{
        e.preventDefault();
        PrescriptionService.savePrescription(prescription)
        .then((response) =>{
            console.log(response);
            navigate("/prescriptionList");
            alert("✅ Item add successfully!");
        })
        .catch((error)=>{
            navigate("/");
            console.log(error + " I am from AddPrescription.");
        })
    }
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Add Prescription</h1>
      </div>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-6 mt-6 space-y-4">
        <input onChange={(e)=>handleChange(e)} value={prescription.prescriptionDate} type="text" name='prescriptionDate' placeholder='Prescription Date'
         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" ></input>

        <input onChange={(e)=>handleChange(e)} value={prescription.patientName} type='text' name='patientName' placeholder='Patient Name' 
         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" ></input>

        <input onChange={(e)=>handleChange(e)} value={prescription.patientAge} type='number' name='patientAge' placeholder='Patient Age'
         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" ></input>

        <select 
          onChange={(e) => handleChange(e)} 
          value={prescription.patientGender} 
          name='patientGender'
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        >
          <option value="" disabled>Select Patient Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input onChange={(e)=>handleChange(e)} value={prescription.diagnosis} type='text' name='diagnosis' placeholder='Diagnosis'
         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" ></input>

        <input onChange={(e)=>handleChange(e)} value={prescription.medicines} type='text' name='medicines' placeholder='Medicines'
         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" ></input>

        <input onChange={(e)=>handleChange(e)} value={prescription.nextVisitDate} type='text' name='nextVisitDate' placeholder='Next Visit Date'
         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" ></input>
      </div>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-6 mt-6 flex justify-between">
        <button onClick={savePrescription} className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Save</button>
        <button onClick={reset} className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Clear</button>
        <button onClick={()=>navigate("/prescriptionList")} className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Cancel</button>
      </div>
    </div>
  )
}

export default AddPrescription

