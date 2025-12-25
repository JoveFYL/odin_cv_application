import Input from "./Input";
import { experienceInfo } from "../types";

function ExperienceSection({ experienceInfo, onChange }: { experienceInfo: experienceInfo, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void }) {

    return (
        <form className="general-section">
            <h2 className="general-section-h2">Experience Section</h2>
            <div className="general-section-inputs-container">
                <Input label={'Company Name'} value={experienceInfo.companyName} onChange={onChange}></Input>
                <Input label={'Position'} value={experienceInfo.position} onChange={onChange}></Input>
                <Input label={'Start Date'} inputType="date" value={experienceInfo.startDate} onChange={onChange}></Input>
                <Input label={'End Date'} inputType="date" value={experienceInfo.endDate} onChange={onChange}></Input>
                <div className="form-input-component">
                    <textarea className="form-textarea" id="formInput-Job Description" placeholder="" onChange={onChange} value={experienceInfo.jobDescription} />
                    <label className="form-label-textarea form-label" htmlFor="formInput-Job Description">Job Description </label>
                </div>
            </div>
            <button type="submit" className="general-section-submit-button">Save</button>
        </form>
    )
}

export default ExperienceSection;