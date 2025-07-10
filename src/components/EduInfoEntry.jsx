import { useState } from "react"
import FormField from "./FormField"
import TrashIcon from "../assets/trash-solid.svg?react"
function EduInfoEntry({setResume, entry, removeEntry, activeEntry, setActiveEntry}) {
    //instiution
    //degree
    //time frame (start & end)
    //location

    // const [entry, setEntry] = useState({
    //     institution: "",
    //     degree: "",
    //     time: "",
    //     location: "",
    // })
    
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

    const render = () => {
        return <div class={`entry-fields ${activeEntry === entry.id ? "active" : "inactive"}`}>
{/* {id, type, placeholder, labelText, onChange} */}
            <FormField id={"institution"} type={"text"} placeholder={"Institution"} 
            labelText={"Institution:"} onChange={(e) => updateEducationalInfo("institution", e.target.value)}
            inputValue={entry.institution ? entry.institution : ""}>

            </FormField>

            <FormField id={"degree"} type={"text"} placeholder={"Degree"} 
            labelText={"Degree:"} onChange={(e) => updateEducationalInfo("degree", e.target.value)}
            inputValue={entry.degree ? entry.degree : ""}>

            </FormField>

            <FormField id={"time"} type={"text"} placeholder={"Time"} 
            labelText={"Time: "} onChange={(e) => updateEducationalInfo("time", e.target.value)}
            inputValue={entry.time ? entry.time : ""}>

            </FormField>

            <FormField id={"education-location"} type={"text"} placeholder={"Location"} 
            labelText={"Location:"} onChange={(e) => updateEducationalInfo("location", e.target.value)}
            inputValue={entry.location ? entry.location : ""}>

            </FormField>

            {/* <label htmlFor="institution">Instution:</label>
            <input value={entry.institution} type="text" id="institution" onChange={(e) => updateEducationalInfo("institution", e.target.value)}/>

            <label htmlFor="degree" >Degree:</label>
            <input value={entry.degree} type="text" id="degree" onChange={(e) => updateEducationalInfo("degree", e.target.value)}/>
            
            <label htmlFor="time">Time Frame:</label>
            <input value={entry.time} type="text" id="time" onChange={(e) => updateEducationalInfo("time", e.target.value)}/>

            <label htmlFor="education-location">Location:</label>
            <input value={entry.location} type="text" id="education-location" onChange={(e) => updateEducationalInfo("location", e.target.value)}/> */}

        <button class="remove-btn" onClick={removeEntry}><TrashIcon class="btn-icon"></TrashIcon></button>
        </div>
    } 

    const updateActiveEntry = () => {
        if (activeEntry !== entry.id)
            setActiveEntry(entry.id)
        else 
            setActiveEntry("")
    }

    const isActive = activeEntry === entry.id

    return <div class="vertical-dd entry">
        <div class="entry-header" onClick={updateActiveEntry}>
            <h2>{entry.institution.trim().length === 0 ? "Education" : entry.institution}</h2>
            <div class="chevron-container">
                <span class={`chevron-left ${isActive ? "active" : "inactive"}`}></span>
                <span class={`chevron-right ${isActive ? "active" : "inactive"}`}></span>
            </div>
        </div>
        {render()}
    </div>
}
export default EduInfoEntry