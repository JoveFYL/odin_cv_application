import Input from "./Input";

function GeneralSection() {
    return (
        <div className="general-section">
            <h2>General Information</h2>
            <div className="general-section-inputs-container">
                <Input label={'Full Name'}></Input>
                <Input label={'Email'} inputType="email"></Input>
                <Input label={'Phone Number'} inputType="tel"></Input>
            </div>

        </div>
    )
}

export default GeneralSection;