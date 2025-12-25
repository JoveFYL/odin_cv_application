import { educationInfo } from "../types";

function EducationSectionContent({ ...props }: educationInfo) {
    return (
        <div className='education-content'>
            <div className='education-content-date'>
                <p>{props.startDate} - {props.endDate}</p>
            </div>
            <div className='education-content-school-degree'>
                <h3>{props.school}</h3>
                <p>{props.degree}</p>
                <p>{props.location}</p>
            </div>
        </div>
    )
}

export default EducationSectionContent;