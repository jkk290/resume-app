import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfoForm'
import EducationInfoForm from './components/EducationInfoForm'
import ProfessionalInfoForm from './components/ProfessionalInfoForm'

function App() {
  const [generalInfo, setGeneralInfo] = useState({firstName: '', lastName: '', email: '', phoneNum: ''});
  const [educationInfo, setEducationInfo] = useState({schoolName: '', studyTitle: '', studyDate: ''});
  const [professionalInfo, setProfessionalInfo] = useState({companyName: '', positionTitle: '', mainResponsibilities: '', employedDateStart: '', employedDateEnd: ''});

  const [isGeneralSubmitted, setIsGeneralSubmitted] = useState(false);
  const [isEducationSubmitted, setIsEducationSubmitted] = useState(false);
  const [isProfessionalSubmitted, setIsProfessionalSubmitted] = useState(false);  

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

  function ShowInfo() {
        if (isGeneralSubmitted && isEducationSubmitted && isProfessionalSubmitted) {
            return (
                <>
                    <h1>{generalInfo.firstName + ' ' + generalInfo.lastName}</h1>
                    <p>{generalInfo.email}</p>
                    <p>{generalInfo.phoneNum}</p>
                    <br/>
                    <h2>{educationInfo.schoolName}</h2>
                    <p>{educationInfo.studyTitle}</p>
                    <p>{educationInfo.studyDate}</p>
                    <br/>
                    <h1>{professionalInfo.companyName}</h1>
                    <p>{professionalInfo.positionTitle}</p>
                    <p>{professionalInfo.mainResponsibilities}</p>
                    <p>{professionalInfo.employedDateStart + ' - ' + professionalInfo.employedDateEnd}</p>
                </>
            )
        }
    }

  return (
    <>
      <GeneralInfoForm 
      generalInfo={generalInfo} 
      setGeneralInfo={setGeneralInfo} 
      onChange={onChangeGeneral} 
      isSubmitted={isGeneralSubmitted} 
      setIsSubmitted={setIsGeneralSubmitted}
      />
      <br/>
      <EducationInfoForm 
      educationInfo={educationInfo} 
      setEducationInfo={setEducationInfo} 
      onChange={onChangeEducation}
      isSubmitted={isEducationSubmitted} 
      setIsSubmitted={setIsEducationSubmitted}
      />
      <br/>
      <ProfessionalInfoForm 
      professionalInfo={professionalInfo} 
      setProfessionalInfo={setProfessionalInfo} 
      onChange={onChangeProfessional} 
      isSubmitted={isProfessionalSubmitted} 
      setIsSubmitted={setIsProfessionalSubmitted}
      />
      <ShowInfo />
    </>
  )
}

export default App
