import { experienceInfo } from "../types";

function ExperienceSectionContent({ ...props }: experienceInfo) {
    return (
        <div className='education-content'>
            <div className='education-content-date'>
                <p>{props.startDate} - {props.endDate}</p>
            </div>
            <div className='education-content-school-degree'>
                <h3>{props.companyName}</h3>
                <p>{props.position}</p>
                <p>{props.jobDescription}</p>
            </div>
        </div>
    )
}

export default ExperienceSectionContent;