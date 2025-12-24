import Input from "./Input";

function ExperienceSection() {
    return (
        <div className="general-section">
            <h2>Experience Section</h2>
            <div className="general-section-inputs-container">
                <Input label={'Company Name'}></Input>
                <Input label={'Position'}></Input>
                <Input label={'Start Date'} inputType="date"></Input>
                <Input label={'End Date'} inputType="date"></Input>
                <div className="form-input-component">
                    <textarea className="form-textarea" id="form-textarea-experience" placeholder="" />
                    <label className="form-label-textarea form-label" htmlFor="form-textarea-experience">Job Description </label>
                </div>
            </div>

        </div>
    )
}

export default ExperienceSection;