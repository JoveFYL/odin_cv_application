import { useState } from 'react'
import GeneralSection from './components/GeneralSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import Resume from './components/Resume'
import { personalInfo, educationInfo, experienceInfo } from './types'
import './App.css'

function handleInputChange<T>(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<T>>
) {
    const field = e.target.dataset.field as keyof T;
    const value = e.target.value;

    setState(prev => ({
        ...prev,
        [field]: value
    }));
}

function handleEdits<T extends { id: string }>(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<T[]>>,
    id: string
) {
    const field = e.target.dataset.field as keyof T;
    const value = e.target.value;
    console.log(id, value);

    setState(prev => prev.map(item => {
        // console.log(item.id, id);

        // console.log(item.id === id ? item : "did not find")
        console.log(item.id == id ? item[field] : "not found");
        return item.id == id ? { ...item, [field]: value } : item
    }));
}

function addEducation(
    setState: React.Dispatch<React.SetStateAction<educationInfo[]>>,
    count: number
) {
    count++;
    console.log(count);

    setState(prev => [
        ...prev,
        {
            id: crypto.randomUUID(),
            school: '',
            degree: '',
            location: '',
            startDate: '',
            endDate: ''
        }
    ])
}

function addExperience(
    setState: React.Dispatch<React.SetStateAction<experienceInfo[]>>,
    count: number
) {
    count++;

    setState(prev => [
        ...prev,
        {
            id: crypto.randomUUID(),
            companyName: '',
            position: '',
            startDate: '',
            endDate: '',
            jobDescription: ''
        }
    ])
}


function App() {
    const [personalInfo, setPersonalInfo] = useState<personalInfo>({
        fullname: '',
        email: '',
        phonenumber: ''
    });

    const [experienceInfos, setExperienceInfos] = useState<experienceInfo[]>([{
        id: crypto.randomUUID(),
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
        jobDescription: ''
    }]);

    const [educationInfos, setEducationInfos] = useState<educationInfo[]>([{
        id: crypto.randomUUID(),
        school: '',
        degree: '',
        location: '',
        startDate: '',
        endDate: ''
    }]);

    let numOfExperienceSections: number = experienceInfos.length;
    let numOfEducationSections: number = educationInfos.length;

    return (
        <div className='app-container'>
            <div className="app-general-section-container">
                <GeneralSection onChange={e => handleInputChange<personalInfo>(e, setPersonalInfo)} personalInfo={personalInfo}></GeneralSection>
                <EducationSection
                    onAdd={() => addEducation(setEducationInfos, numOfEducationSections)}
                    onChange={e => handleEdits<educationInfo>(e, setEducationInfos, educationInfos[numOfEducationSections === 0 ? 0 : numOfEducationSections - 1].id)}
                    educationInfo={educationInfos[numOfEducationSections === 0 ? 0 : numOfEducationSections - 1]}
                ></EducationSection>
                <ExperienceSection
                    onAdd={() => addExperience(setExperienceInfos, numOfExperienceSections)}
                    onChange={e => handleEdits<experienceInfo>(e, setExperienceInfos, experienceInfos[numOfExperienceSections === 0 ? 0 : numOfEducationSections - 1].id)}
                    experienceInfo={experienceInfos[numOfExperienceSections === 0 ? 0 : numOfExperienceSections - 1]}
                ></ExperienceSection>
            </div>
            <Resume personalInfo={personalInfo} educationInfos={educationInfos} experienceInfos={experienceInfos}></Resume>
        </div>
    )
}

export default App
