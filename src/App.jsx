import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfoForm'
import EducationInfoForm from './components/EducationInfoForm'
import ProfessionalInfoForm from './components/ProfessionalInfoForm'

function App() {
  const [generalInfo, setGeneralInfo] = useState({firstName: '', lastName: '', email: '', phoneNum: ''});

  function onChangeGeneral(e){
        const name = e.target.name;
        const value = e.target.value;
        setGeneralInfo({...generalInfo, [name]:value});
    }

  return (
    <>
      <GeneralInfoForm generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} onChange={onChangeGeneral}/>
      <br/>
      <EducationInfoForm />
      <br/>
      <ProfessionalInfoForm />
    </>
  )
}

export default App
