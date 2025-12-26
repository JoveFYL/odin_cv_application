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
        return item.id == id ? { ...item, [field]: value } : item
    }));
}

function handleSaveDraft<T extends { id: string }>(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    setState: React.Dispatch<React.SetStateAction<T>>,
    infos: T[],
    draftId: string) {
    e.preventDefault();
    const draft = infos.find(info => info.id === draftId);
    if (draft) {
        setState(draft);
    } else {
        console.error("Could not find draft");
    }
    console.log(draft!.id);
}

function handleEditDraft(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    setState: React.Dispatch<React.SetStateAction<string>>
) {
    const id = e.currentTarget.dataset.id;
    if (id != null) {
        setState(id);
        console.log(id);
    } else {
        console.error("ID not found for editing draft.");
    }
}

function createEmptyEducation(): educationInfo {
    return {
        id: crypto.randomUUID(),
        school: 'Keyboard University',
        degree: '',
        location: '',
        startDate: '',
        endDate: ''
    };
}

function createEmptyExperience(): experienceInfo {
    return {
        id: crypto.randomUUID(),
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
        jobDescription: ''
    };
}

function App() {
    const emptyEducation: educationInfo = createEmptyEducation();
    const trash: educationInfo = createEmptyEducation();
    const emptyExperience: experienceInfo = createEmptyExperience();

    const [personalInfo, setPersonalInfo] = useState<personalInfo>({
        fullName: '',
        email: '',
        phoneNumber: ''
    });

    const [experienceInfos, setExperienceInfos] = useState<experienceInfo[]>([{ ...emptyExperience }]);
    const [educationInfos, setEducationInfos] = useState<educationInfo[]>([{ ...emptyEducation }, { ...trash }]);
    const [educationDraftId, setEducationDraftId] = useState<string>(emptyEducation.id);
    const [experienceDraftId, setExperienceDraftId] = useState<string>(emptyExperience.id);
    const [savedEducation, setSavedEducation] = useState<educationInfo>({ ...emptyEducation });
    const [savedExperience, setSavedExperience] = useState<experienceInfo>({ ...emptyExperience });

    return (
        <div className='app-container'>
            <div className="app-general-section-container">
                <GeneralSection onChange={e => handleInputChange<personalInfo>(e, setPersonalInfo)} personalInfo={personalInfo}></GeneralSection>
                <EducationSection
                    onChange={e => handleEdits<educationInfo>(e, setEducationInfos, educationDraftId)}
                    educationInfo={educationInfos.find(info => info.id === educationDraftId) || educationInfos[0]}
                    onSave={e => handleSaveDraft<educationInfo>(e, setSavedEducation, educationInfos, educationDraftId)}
                ></EducationSection>
                <div className='education-list-container'>
                    {educationInfos.map(info => {
                        return (
                            <div key={info.id} className='education-list-item' data-id={info.id}>
                                <p>{info.school}</p>
                                <button type="button" className="general-section-edit-button" onClick={e => handleEditDraft(e, setEducationDraftId)} data-id={info.id}>Edit</button>
                            </div>
                        )
                    })}
                </div>
                <ExperienceSection
                    onChange={e => handleEdits<experienceInfo>(e, setExperienceInfos, experienceDraftId)}
                    experienceInfo={experienceInfos.find(info => info.id === experienceDraftId || experienceInfos[0].id)!}
                ></ExperienceSection>
            </div>
            <Resume personalInfo={personalInfo} educationInfos={educationInfos} experienceInfos={experienceInfos}></Resume>
        </div>
    )
}

export default App
