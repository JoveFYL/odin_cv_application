import '../styles/styles.css';
import EducationSectionContent from './EducationSectionContent';
import { personalInfo, educationInfo, experienceInfo } from '../types';
import ExperienceSectionContent from './ExperienceSectionContent';

function Resume({ personalInfo }: { personalInfo: personalInfo }) {
    return (
        <div className='resume-container'>
            <div className='resume-header'>
                <h1 className='resume-name'>{personalInfo.name}</h1>
                <div className='resume-general-information'>
                    <p>{personalInfo.email}</p>
                    <p>{personalInfo.phone}</p>
                </div>
            </div>
            <div className='resume-section-container'>
                <h2 className='resume-h2'>Education</h2>
                <EducationSectionContent startDate={'20/12/2020'} endDate={'present'} degree={'Bachelor of Science in Computer Science'} school={'London City University'} location={'London'}></EducationSectionContent>
            </div>
            <div className='resume-section-container'>
                <h2 className='resume-h2'>Experience</h2>
                <ExperienceSectionContent startDate={'20/12/2020'} endDate={'present'} companyName={'Google'} position={'Software Engineering Intern'} jobDescription={'hi hi hi hi internship yay'}></ExperienceSectionContent>
            </div>
        </div>
    )
}

export default Resume;