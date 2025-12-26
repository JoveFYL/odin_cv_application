import { educationInfo } from "../types";

function EducationSectionContent({ id, school, degree, location, startDate, endDate }: educationInfo) {
    return (
        <div className='education-content' id={id}>
            <div className='education-content-date'>
                <p>{startDate} {startDate != '' && '-'} {endDate === new Date().toISOString().slice(0, 10) ? 'Present' : endDate}</p>
            </div>
            <div className='education-content-school-degree'>
                <h3 className='textboxes'>{school}</h3>
                <p className='textboxes'>{degree}</p>
                <p className='textboxes'>{location}</p>
            </div>
        </div>
    )
}

export default EducationSectionContent;