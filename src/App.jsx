import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfoForm'
import EducationInfoForm from './components/EducationInfoForm'

function App() {

  return (
    <>
      <GeneralInfoForm />
      <br/>
      <EducationInfoForm />
      <br/>
    </>
  )
}

export default App
