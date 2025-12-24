import Input from "./Input";

function EducationSection() {
    return (
        <div className="general-section">
            <h2>Education Section</h2>
            <div className="general-section-inputs-container">
                <Input label={'School'}></Input>
                <Input label={'Degree'}></Input>
                <Input label={'Start Date'} inputType="date"></Input>
                <Input label={'End Date'} inputType="date"></Input>
            </div>

        </div>
    )
}

export default EducationSection;