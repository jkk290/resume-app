import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfoForm'
import EducationInfoForm from './components/EducationInfoForm'
import ProfessionalInfoForm from './components/ProfessionalInfoForm'

function App() {
  const [generalInfo, setGeneralInfo] = useState({firstName: '', lastName: '', email: '', phoneNum: ''});
  const [educationInfo, setEducationInfo] = useState({schoolName: '', studyTitle: '', studyDate: ''});
  const [professionalInfo, setProfessionalInfo] = useState({companyName: '', positionTitle: '', mainResponsibilities: '', employedDateStart: '', employedDateEnd: ''});

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

  function onChangeProfessional(e){
        const name = e.target.name;
        const value = e.target.value;
        setProfessionalInfo({...professionalInfo, [name]:value});
  }

  return (
    <>
      <GeneralInfoForm generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} onChange={onChangeGeneral}/>
      <br/>
      <EducationInfoForm educationInfo={educationInfo} setEducationInfo={setEducationInfo} onChange={onChangeEducation}/>
      <br/>
      <ProfessionalInfoForm professionalInfo={professionalInfo} setProfessionalInfo={setProfessionalInfo} onChange={onChangeProfessional}/>
    </>
  )
}

export default App
