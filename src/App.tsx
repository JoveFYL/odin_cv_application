import { useState } from 'react'
import GeneralSection from './components/GeneralSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import Resume from './components/Resume'
import { personalInfo, educationInfo, experienceInfo } from './types'
import './App.css'

function handlePersonalInfoInputChange(e: React.ChangeEvent<HTMLInputElement>, setPersonalInfo: React.Dispatch<React.SetStateAction<personalInfo>>) {
    const id = e.target.id;
    const value = e.target.value;

    if (id === 'formInput-Full Name') {
        setPersonalInfo(prevState => ({ ...prevState, name: value }));
    } else if (id === 'formInput-Email') {
        setPersonalInfo(prevState => ({ ...prevState, email: value }));
    } else if (id === 'formInput-Phone Number') {
        setPersonalInfo(prevState => ({ ...prevState, phone: value }));
    } else {
        console.warn('Unhandled exception');
    }
}

function handleEducationInfoInputChange(e: React.ChangeEvent<HTMLInputElement>, setEducationInfo: React.Dispatch<React.SetStateAction<educationInfo>>) {
    const id = e.target.id;
    const value = e.target.value;

    if (id === 'formInput-School') {
        setEducationInfo(prevState => ({ ...prevState, school: value }));
    } else if (id === 'formInput-Degree') {
        setEducationInfo(prevState => ({ ...prevState, degree: value }));
    } else if (id === 'formInput-Location') {
        setEducationInfo(prevState => ({ ...prevState, location: value }));
    } else if (id === 'formInput-Start Date') {
        setEducationInfo(prevState => ({ ...prevState, startDate: value }));
    } else if (id === 'formInput-End Date') {
        setEducationInfo(prevState => ({ ...prevState, endDate: value }));
    } else {
        console.warn('Unhandled exception');
    }
}

function handleExperienceInfoInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setExperienceInfo: React.Dispatch<React.SetStateAction<experienceInfo>>) {
    const id = e.target.id;
    const value = e.target.value;
    console.log(value);

    if (id === 'formInput-Company Name') {
        setExperienceInfo(prevState => ({ ...prevState, companyName: value }));
    } else if (id === 'formInput-Position') {
        setExperienceInfo(prevState => ({ ...prevState, position: value }));
    } else if (id === 'formInput-Start Date') {
        setExperienceInfo(prevState => ({ ...prevState, startDate: value }));
    } else if (id === 'formInput-End Date') {
        setExperienceInfo(prevState => ({ ...prevState, endDate: value }));
    } else if (id === 'formInput-Job Description') {
        setExperienceInfo(prevState => ({ ...prevState, jobDescription: value }));
    } else {
        console.warn('Unhandled exception');
    }
}

function App() {
    const [personalInfo, setPersonalInfo] = useState<personalInfo>({
        name: '',
        email: '',
        phone: ''
    })

    const [experienceInfo, setExperienceInfo] = useState<experienceInfo>({
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
        jobDescription: ''
    })

    const [educationInfo, setEducationInfo] = useState<educationInfo>({
        school: '',
        degree: '',
        location: '',
        startDate: '',
        endDate: ''
    })

    return (
        <div className='app-container'>
            <div className="app-general-section-container">
                <GeneralSection onChange={e => handlePersonalInfoInputChange(e, setPersonalInfo)} personalInfo={personalInfo}></GeneralSection>
                <EducationSection onChange={e => handleEducationInfoInputChange(e, setEducationInfo)} educationInfo={educationInfo}></EducationSection>
                <ExperienceSection onChange={e => handleExperienceInfoInputChange(e, setExperienceInfo)} experienceInfo={experienceInfo}></ExperienceSection>
            </div>
            <Resume personalInfo={personalInfo}></Resume>
        </div>
    )
}

export default App
