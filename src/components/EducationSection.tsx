import Input from "./Input";

type educationInfo = {
    school: string;
    degree: string;
    location: string;
    startDate: string;
    endDate: string;
}

function EducationSection({ onChange, educationInfo }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, educationInfo: educationInfo }) {
    return (
        <form className="general-section">
            <h2 className="general-section-h2">Education Section</h2>
            <div className="general-section-inputs-container">
                <Input label={'School'} value={educationInfo.school} onChange={onChange}></Input>
                <Input label={'Degree'} value={educationInfo.degree} onChange={onChange}></Input>
                <Input label={'Location'} value={educationInfo.location} onChange={onChange}></Input>
                <Input label={'Start Date'} inputType="date" value={educationInfo.startDate} onChange={onChange}></Input>
                <Input label={'End Date'} inputType="date" value={educationInfo.endDate} onChange={onChange}></Input>
            </div>
            <button type="submit" className="general-section-submit-button">Save</button>
        </form>
    )
}

export default EducationSection;