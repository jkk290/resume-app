import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfoForm'
import EducationInfoForm from './components/EducationInfoForm'
import ProfessionalInfoForm from './components/ProfessionalInfoForm'

function App() {
  const [generalInfo, setGeneralInfo] = useState({firstName: '', lastName: '', email: '', phoneNum: ''});
  const [educationInfo, setEducationInfo] = useState({schoolName: '', studyTitle: '', studyDate: ''});

  function onChangeGeneral(e){
        const name = e.target.name;
        const value = e.target.value;
        setGeneralInfo({...generalInfo, [name]:value});
  }
  
  function onChangeEducation(e){
      const name = e.target.name;
      const value = e.target.value;
      setEducationInfo({...educationInfo, [name]:value});
  }

  return (
    <>
      <GeneralInfoForm generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} onChange={onChangeGeneral}/>
      <br/>
      <EducationInfoForm educationInfo={educationInfo} setEducationInfo={setEducationInfo} onChange={onChangeEducation}/>
      <br/>
      <ProfessionalInfoForm />
    </>
  )
}

export default App
