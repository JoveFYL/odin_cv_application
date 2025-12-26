import '../styles/styles.css';
import EducationSectionContent from './EducationSectionContent';
import { personalInfo, educationInfo, experienceInfo } from '../types';
import ExperienceSectionContent from './ExperienceSectionContent';

function Resume({ personalInfo, educationInfos, experienceInfos }: { personalInfo: personalInfo, educationInfos: educationInfo[], experienceInfos: experienceInfo[] }) {
    return (
        <div className='resume-container'>
            <div className='resume-header'>
                <h1 className='resume-name'>{personalInfo.fullname}</h1>
                <div className='resume-general-information'>
                    <p>{personalInfo.email}</p>
                    <p>{personalInfo.phonenumber}</p>
                </div>
            </div>
            <div className='resume-section-container' data-form='education'>
                <h2 className='resume-h2'>Education</h2>
                {educationInfos.map(info => {
                    console.log(info);
                    return <EducationSectionContent key={info.id} {...info}></EducationSectionContent>
                })}
            </div>
            <div className='resume-section-container' data-form='experience'>
                <h2 className='resume-h2'>Experience</h2>
                {experienceInfos.map(info => {
                    console.log(info);
                    return <ExperienceSectionContent key={info.id} {...info}></ExperienceSectionContent>
                })}
            </div>
        </div>
    )
}

export default Resume;