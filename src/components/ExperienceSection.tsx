import Input from "./Input";
import { experienceInfo } from "../types";

function ExperienceSection({ experienceInfo, onChange, onSave }: { onSave?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, experienceInfo: experienceInfo }) {
    const textAreaId = crypto.randomUUID();
    return (
        <form className="general-section" data-form='experience'>
            <h2 className="general-section-h2">Experience Section</h2>
            <div className="general-section-inputs-container">
                <Input label={'Company Name'} field={'companyName'} value={experienceInfo.companyName} onChange={onChange}></Input>
                <Input label={'Position'} field={'position'} value={experienceInfo.position} onChange={onChange}></Input>
                <Input label={'Start Date'} field={'startDate'} inputType="date" value={experienceInfo.startDate} onChange={onChange}></Input>
                <Input label={'End Date'} field={'endDate'} inputType="date" value={experienceInfo.endDate} onChange={onChange}></Input>
                <div className="form-input-component">
                    <textarea className="form-textarea" id={textAreaId} placeholder="" value={experienceInfo.jobDescription} onChange={onChange} data-field={"jobDescription"} />
                    <label className="form-label-textarea form-label" htmlFor={textAreaId}>Job Description </label>
                </div>
            </div>
            <div className="buttons-container">
                <button type="submit" className="general-section-submit-button" onClick={onSave}>Save</button>
            </div>
        </form>
    )
}

export default ExperienceSection;