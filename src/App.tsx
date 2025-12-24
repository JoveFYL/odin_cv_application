import { useState } from 'react'
import GeneralSection from './components/GeneralSection'
import './App.css'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <div>
            <div className="app-general-section-container">
                <GeneralSection></GeneralSection>
                <EducationSection></EducationSection>
                <ExperienceSection></ExperienceSection>
            </div>
        </div>
    )
}

export default App
