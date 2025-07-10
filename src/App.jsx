import { useState } from 'react'
import './App.css'
import Resume from './components/Resume'
import Sidebar from './components/Sidebar'

function App() {
  const [resume, setResume] = useState({
    general: {
        name: "John Smith",
        phone: "123-456-7890",
        email: "john.smith@example.com",
        linkedin: "linkedin.com"
    },
    educational: [
      {
        institution: "Institution",
        degree: "Degree",
        time: "Start - End",
        location: "Location",
        id: crypto.randomUUID()
      }
  ],
    practical: [
      {
        name: "Company",
        time: "Start - End",
        role: "Role",
        location: "Location",
        resp: "Describe practical experience (responsibilities, relevent skills)",
        points: []
      }
    ]
  })

  const [bulletPoints, setBulletPoints] = useState({})


  return (
      <div class="app">
        <Sidebar setBulletPoints={setBulletPoints} bulletPoints={bulletPoints}
         resume={resume} setResume={setResume}></Sidebar>
        <Resume resume={resume} bulletPoints={bulletPoints}></Resume>
      </div>
  )
}

export default App
