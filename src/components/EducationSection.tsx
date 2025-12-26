import Input from "./Input";

type educationInfo = {
    school: string;
    degree: string;
    location: string;
    startDate: string;
    endDate: string;
}

function EducationSection({ educationInfo, onChange, onSave }: { onSave: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, educationInfo: educationInfo }) {
    return (
        <form className="general-section" data-form='education'>
            <h2 className="general-section-h2">Education Section</h2>
            <div className="general-section-inputs-container">
                <Input label={'School'} field={'school'} value={educationInfo.school} onChange={onChange}></Input>
                <Input label={'Degree'} field={'degree'} value={educationInfo.degree} onChange={onChange}></Input>
                <Input label={'Location'} field={'location'} value={educationInfo.location} onChange={onChange}></Input>
                <Input label={'Start Date'} field={'startDate'} inputType="date" value={educationInfo.startDate} onChange={onChange}></Input>
                <Input label={'End Date'} field={'endDate'} inputType="date" value={educationInfo.endDate} onChange={onChange}></Input>
            </div>
            <div className="buttons-container">
                <button type="submit" className="general-section-submit-button" onClick={onSave}>Save</button>
                <button type="button" className="general-section-add-button">Add</button>
            </div>
        </form >
    )
}

export default EducationSection;