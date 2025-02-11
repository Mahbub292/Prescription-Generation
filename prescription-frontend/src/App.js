import Longin from './components/Longin';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrescriptionList from './components/PrescriptionList';
import BackendTest from './components/BackendTest';
import EditPrescription from './components/EditPrescription';
import AddPrescription from './components/AddPrescription';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Longin/>}></Route>
      <Route path='/' element={<Longin/>}></Route>
      <Route path='/prescriptionList' element={<PrescriptionList/>}></Route>
      <Route path='/back-test' element={<BackendTest/>}></Route>
      <Route path='/edit-prescription/:id' element={<EditPrescription/>}></Route>
      <Route path='/add-prescription' element ={<AddPrescription/>}></Route>
      {/* <Route path="/addUser" element={<AddUser/>}></Route>
      <Route path="/editUser/:id" element={<UpdateUser/>}></Route>  */}
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
