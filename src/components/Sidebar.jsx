// import EduInfoEntry from "./EduInfoEntry"
import GeneralInfoEntry from "./GeneralInfoEntry"
// import PracInfoEntry from "./PracInfoEntry"
import EduInfoSection from "./EduInfoSection"
import PracInfoSection from "./PracInfoSection"
import { useState } from "react"

function Sidebar({bulletPoints, setBulletPoints, resume, setResume}) {
    //TODO edit & sumit btn for each section

    const [activeSection, setActiveSection] = useState(null)
    const updateFcns = [] 
    const renderSections = () => {
        for (let i = 0; i < 3; i++) {
            updateFcns[i] = {
                updateActiveSection: () => {
                    setActiveSection(prevActive => prevActive === i ? null : i)
                }
            }
        }
        const sections = [
            <GeneralInfoEntry activeSection={activeSection === 0} setActiveSection={setActiveSection}
            resume={resume} setResume={setResume} {...updateFcns[0]}></GeneralInfoEntry>, 

            <EduInfoSection activeSection={activeSection === 1} setActiveSection={setActiveSection}
            resume={resume} setResume={setResume} {...updateFcns[1]}></EduInfoSection>,

            <PracInfoSection activeSection={activeSection === 2} setActiveSection={setActiveSection}
            bulletPoints={bulletPoints} setBulletPoints={setBulletPoints} resume={resume} 
            setResume={setResume} {...updateFcns[2]}></PracInfoSection>
        ]
        if (activeSection === null)
            return sections

        return sections[activeSection]
    }
    return <div class="sidebar">
        {renderSections()}
    </div>
}

export default Sidebar