import { useState } from "react"
import PracInfoEntry from "./PracInfoEntry"
import Dropdown from "./Dropdown"
import { useEffect } from "react"

function PracInfoSection({bulletPoints, setBulletPoints, resume, setResume, activeSection,
    updateActiveSection
}) {
    const [visible, setVisible] = useState(true)
    const [activeEntry, setActiveEntry] = useState("")
    const addEntry = () => {
        setResume(prevResume => ({
            ...prevResume,
            practical: [
                ...prevResume.practical,
                {
                    name: "",
                    time: "",
                    role: "",
                    location: "",
                    points: [],
                    id: crypto.randomUUID()
                }
            ]
        }))
    }

    const removeEntry = (id) => {
        setResume(prevResume => ({
            ...prevResume, 
            practical: prevResume.practical.filter(i => i.id !== id)
        }))
    }

    const updatePracInfo = (entry, infoKey, val) => {
        setResume(prevResume => ({
            ...prevResume,
            practical: prevResume.practical.map(i => i.id !== entry.id ? i : {
                ...i,
                [infoKey]: val
            })
        }))
    }

    const render = () => {
        return <>
            {resume.practical.map(i => <PracInfoEntry bulletPoints={bulletPoints} setBulletPoints={setBulletPoints}
             entry={i} updatePracInfo={updatePracInfo} setResume={setResume} key={i.id}
             removeEntry={removeEntry} activeEntry={activeEntry} setActiveEntry={setActiveEntry}></PracInfoEntry>)}

        </>    
    }

    const updateActiveVisible = () => {
        updateActiveSection()

    }

    console.log(activeSection)
    return <div class="vertical-dd entry-form">
        <Dropdown header={<h1>Practical Info</h1>}
            visible={activeSection} update={updateActiveVisible}>
        </Dropdown>
        <button class="header-btn" onClick={addEntry}>Add Practical Exp.</button>
        <div class={`dropdown entry-container ${activeSection ? "active" : "inactive"}`}>
            {render()}
        </div>
    </div>
}

export default PracInfoSection