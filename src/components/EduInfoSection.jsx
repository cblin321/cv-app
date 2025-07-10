import { useState } from "react"
import EduInfoEntry from "./EduInfoEntry"
import Dropdown from "./Dropdown"
import { useEffect } from "react"
/**
 *  Sidebar section for entering educational info
 */
function EduInfoSection({resume, setResume, activeSection, updateActiveSection}) {
    const [visible, setVisible] = useState(false)
    const [activeEntry, setActiveEntry] = useState("")
    const addEntry = () => {
        setResume(prevResume => {
            return ({
                ...prevResume,
                educational: [
                    ...prevResume.educational,
                    {
                        institution: "",
                        degree: "",
                        time: "",
                        location: "",
                        id: crypto.randomUUID()
                    }
                ]
            })
        })
    }
    const removeEntry = (id) => {
        setResume(prevResume => ({
            ...prevResume,
            educational: prevResume.educational.filter(i => id === i.id)
        }))
    }

    const eduInfo = resume.educational.map((i, j) => {
        return <EduInfoEntry activeEntry={activeEntry} setActiveEntry={setActiveEntry}
        setResume={setResume} entry={i} key={i.id} removeEntry={removeEntry}></EduInfoEntry>
    })
    const updateEducationalInfo = (infoKey, val) => {
        // setEntry(prevEntry => ({...prevEntry, [infoKey]: val}))

        setResume(prevInfo => {
            
            return {
                ...prevInfo,
                educational: 
                    prevInfo.educational.map(i => i.id !== entry.id ? i : {
                        ...i,
                        [infoKey]: val
                    })
                
            }
         })
    }


    // const educationalList = [
    //    {
    //     id: "institution",
    //     keyInfo: "institution",
    //    } 
    // ]

    const dropdownProps = ["id", "type", "value", "keyInfo"]
    const educationalList = () => {
        // let i = 0
        const list = []
        for (const entry of resume.educational) {
            let tempEntry = {} 
            for (const prop in entry) {
                // for (const ddProp in dropdownProps)
                tempEntry["id"] = prop
                tempEntry["keyInfo"] = prop
                // tempEntry[""]
                tempEntry["value"] = entry[prop]
            }
            list.push(tempEntry)
        }
        return list
    }

    // const eduInfo = resume.educational.map((i, j) => {
    //     return <Dropdown elements={educationalList()} id={i} key={i.id} createEntry={addEntry} type={"static"}
    //     updateEntry={updateEducationalInfo} deleteEntry={removeEntry}></Dropdown>
    // })

    const updateActiveVisible = () => {
        updateActiveSection()
    }

    return <div class="vertical-dd entry-form"> 
        <div class="section-header">
            <Dropdown header={<h1>Educational Info</h1>}
                active={activeSection} update={updateActiveVisible}
                ></Dropdown>
            <button class="header-btn"onClick={addEntry}>Add Educational Experience</button>
        </div>
        {/* <div 
            onClick={() => setVisible(prevVisible => !prevVisible)} class="section-header">
            
            <div class="chevron-container">
            <span class={`chevron-left ${visible ? "active" : "inactive"}`}></span>
            <span class={`chevron-right ${visible ? "active" : "inactive"}`}></span>
            </div>
        </div> */}

        <div class={`dropdown entry-container ${activeSection ? "active" : "inactive"}`}>
            {eduInfo}
        </div>
    </div>
}

export default EduInfoSection