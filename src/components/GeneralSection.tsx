import Input from "./Input";
import { personalInfo } from "../types";

function GeneralSection({ personalInfo, onChange }: { personalInfo: personalInfo, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <div className="general-section">
            <h2 className="general-section-h2">General Information</h2>
            <div className="general-section-inputs-container">
                <Input label={'Full Name'} field={'fullName'} onChange={onChange} value={personalInfo.fullName}></Input>
                <Input label={'Email'} field={'email'} inputType="email" onChange={onChange} value={personalInfo.email} ></Input>
                <Input label={'Phone Number'} field={'phoneNumber'} inputType="tel" onChange={onChange} value={personalInfo.phoneNumber}></Input>
            </div>
        </div>
    )
}

export default GeneralSection;