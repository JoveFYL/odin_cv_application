import React, { useState } from 'react'
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
    setInfos: React.Dispatch<React.SetStateAction<T[]>>,
    setNewDraft: React.Dispatch<React.SetStateAction<string>>,
    createNewDraft: () => T,
    infos: T[],
    draftId: string
) {
    // check if the form is valid e.g. required fields are filled
    const form = e.currentTarget.form;
    if (!form || !form.checkValidity()) {
        form?.reportValidity();
        return;
    }

    e.preventDefault();
    console.log(draftId)
    const draft = infos.find(info => info.id === draftId);
    if (draft) {
        // create new draft and add it to the infos array and set it as the new draft
        const newDraft = createNewDraft();
        setInfos(prev => [...prev, newDraft]);
        setNewDraft(newDraft.id);
        console.log(newDraft.id);
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

function handleDelete<T extends { id: string }>(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    setInfos: React.Dispatch<React.SetStateAction<T[]>>,
    setEducationDraftId: React.Dispatch<React.SetStateAction<string>>,
    id: string
) {
    e.preventDefault();

    setInfos(prev => {
        if (prev.length <= 1) {
            console.error("Cannot delete one or less items.");
            return prev;
        }
        const updated = prev.filter(info => info.id !== id);

        setEducationDraftId(updated[0].id);
        return updated;
    });
}

function createEmptyEducation(): educationInfo {
    return {
        id: crypto.randomUUID(),
        school: 'Your Draft',
        degree: '',
        location: '',
        startDate: '',
        endDate: ''
    };
}

function createEmptyExperience(): experienceInfo {
    return {
        id: crypto.randomUUID(),
        companyName: 'Your Draft',
        position: '',
        startDate: '',
        endDate: '',
        jobDescription: ''
    };
}

function App() {
    const emptyEducation: educationInfo = createEmptyEducation();
    const emptyExperience: experienceInfo = createEmptyExperience();

    const [personalInfo, setPersonalInfo] = useState<personalInfo>({
        fullName: '',
        email: '',
        phoneNumber: ''
    });

    const [experienceInfos, setExperienceInfos] = useState<experienceInfo[]>([{ ...emptyExperience }]);
    const [educationInfos, setEducationInfos] = useState<educationInfo[]>([{ ...emptyEducation }]);
    const [educationDraftId, setEducationDraftId] = useState<string>(emptyEducation.id);
    const [experienceDraftId, setExperienceDraftId] = useState<string>(emptyExperience.id);

    return (
        <div className='app-container'>
            <div className="app-general-section-container">
                <GeneralSection onChange={e => handleInputChange<personalInfo>(e, setPersonalInfo)} personalInfo={personalInfo}></GeneralSection>
                <EducationSection
                    onChange={e => handleEdits<educationInfo>(e, setEducationInfos, educationDraftId)}
                    educationInfo={educationInfos.find(info => info.id === educationDraftId) || educationInfos[0]}
                    onSave={e => handleSaveDraft<educationInfo>(e, setEducationInfos, setEducationDraftId, createEmptyEducation, educationInfos, educationDraftId)}
                ></EducationSection>
                <div className='list-container'>
                    {educationInfos.length == 1
                        ? null
                        : educationInfos.filter(info => info.id !== educationDraftId)
                            .map(info => {
                                return (
                                    <div key={info.id} className='list-item' data-id={info.id}>
                                        <p>{info.school}</p>
                                        <div className="list-buttons-container">
                                            <button type="button" className="general-section-edit-button"
                                                onClick={e => handleEditDraft(e, setEducationDraftId)} data-id={info.id}>
                                                Edit
                                            </button>
                                            <button type="button" className="general-section-edit-button delete-button"
                                                onClick={e => handleDelete(e, setEducationInfos, setEducationDraftId, info.id)} data-id={info.id}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                </div>
                <ExperienceSection
                    onChange={e => handleEdits<experienceInfo>(e, setExperienceInfos, experienceDraftId)}
                    experienceInfo={experienceInfos.find(info => info.id === experienceDraftId) || experienceInfos[0]}
                    onSave={e => handleSaveDraft<experienceInfo>(e, setExperienceInfos, setExperienceDraftId, createEmptyExperience, experienceInfos, experienceDraftId)}
                ></ExperienceSection>
                <div className='list-container'>
                    {experienceInfos.length == 1
                        ? null
                        : experienceInfos.filter(info => info.id !== experienceDraftId)
                            .map(info => {
                                return (
                                    <div key={info.id} className='list-item' data-id={info.id}>
                                        <p>{info.companyName}</p>
                                        <div className="list-buttons-container">
                                            <button type="button" className="general-section-edit-button"
                                                onClick={e => handleEditDraft(e, setExperienceDraftId)} data-id={info.id}>
                                                Edit
                                            </button>
                                            <button type="button" className="general-section-edit-button delete-button"
                                                onClick={e => handleDelete(e, setExperienceInfos, setExperienceDraftId, info.id)} data-id={info.id}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                </div>
            </div>
            <Resume personalInfo={personalInfo} educationInfos={educationInfos} experienceInfos={experienceInfos}></Resume>
        </div>
    )
}

export default App
