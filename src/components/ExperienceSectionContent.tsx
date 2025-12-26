import { experienceInfo } from "../types";

function ExperienceSectionContent({ id, companyName, startDate, endDate, position, jobDescription }: experienceInfo) {
    return (
        <div className='education-content' id={id}>
            <div className='education-content-date'>
                <p>{startDate} {startDate != '' && '-'} {endDate === new Date().toISOString().slice(0, 10) ? 'Present' : endDate}</p>
            </div>
            <div className='education-content-school-degree'>
                <h3>{companyName}</h3>
                <p>{position}</p>
                <p>{jobDescription}</p>
            </div>
        </div>
    )
}

export default ExperienceSectionContent;