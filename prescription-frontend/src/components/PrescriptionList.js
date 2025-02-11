
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import PrescriptionService from '../service/PrescriptionService';

const PrescriptionList = () => {

    
        const [loding, setLoding] = useState(true);
        const [prescriptions, setPrescriptions] = useState(null);
        useEffect(()=>{
            const fatchData = async () =>{
                setLoding(true)
                try{
                    const response = await PrescriptionService.getPrescription();
                    setPrescriptions(response.data);
                }catch(error){
                    console.log(error);
                }
                setLoding(false)
            };
            fatchData();
        },[]);
        const deletePrescription = (e, id) =>{
                e.preventDefault();
                PrescriptionService.deletePrescription(id)
                .then(() =>{
                  if(prescriptions){
                    setPrescriptions((prevElement)=>{
                      return prevElement.filter((prescription)=>prescription.id !== id);
                    })
                  }
                })
            }

    const editPrescription = (e, id)=> {
        e.preventDefault();
        navigate(`/edit-prescription/${id}`);
      }
      const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <div className="mb-8">
        <button onClick={()=>navigate("/add-prescription")} className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Add Prescription</button>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Prescription List</h2>
        </div>
        <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diagnosis</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medicines</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Visit Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    {!loding && (
                    <tbody className="bg-white divide-y divide-gray-200">
                    {prescriptions.map((prescription)=> (
                        
                            <tr key={prescription.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prescription.prescriptionDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prescription.patientName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prescription.patientAge}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prescription.patientGender}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prescription.diagnosis}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prescription.medicines}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prescription.nextVisitDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> 
                                    <button  onClick={(e, id)=>editPrescription(e, prescription.id)} className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2">Edit</button>
                                    <button  onClick={(e, id)=>deletePrescription(e, prescription.id)} className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    )}
                </table>
            </div>

    </div>
  )
}

export default PrescriptionList
