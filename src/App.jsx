import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfoForm'
import EducationInfoForm from './components/EducationInfoForm'
import ProfessionalInfoForm from './components/ProfessionalInfoForm'

function App() {

  return (
    <>
      <GeneralInfoForm />
      <br/>
      <EducationInfoForm />
      <br/>
      <ProfessionalInfoForm />
    </>
  )
}

export default App
