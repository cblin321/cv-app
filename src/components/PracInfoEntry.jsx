import { useState } from "react"
import TrashIcon from "../assets/trash-solid.svg?react"
import DropdownEntry from "./DropdownEntry"
import Dropdown from "./Dropdown"
import FormField from "./FormField"

function PracInfoEntry(props) {
    //needs to store highlights

    const {bulletPoints, setBulletPoints, 
         entry, removeEntry, setResume, activeEntry, setActiveEntry} = props

    const updatePracInfo = (infoKey, val) => {
        setResume(prevResume => ({
            ...prevResume,
            practical: prevResume.practical.map(i => i.id !== entry.id ? i : {
                ...i,
                [infoKey]: val
            })
        }))
    }

    const updateActiveEntry = () => {
        if (activeEntry === entry.id)
            setActiveEntry("")
        else
            setActiveEntry(entry.id)
    }

    return <div class="vertical-dd">
        <Dropdown active={activeEntry === entry.id}
        header={<h1>{entry.name ? entry.name : "Practical"}</h1>} update={updateActiveEntry}></Dropdown>

        <div class={`entry-fields ${activeEntry === entry.id ? "active" : "inactive"}`}>
            <FormField id="name" type="text" onChange={(e) => updatePracInfo("name", e.target.value)}
                placeholder="Enter Name" labelText="Name:"></FormField>        

            <FormField id="time" type="text" onChange={(e) => updatePracInfo("time", e.target.value)}
                placeholder="Enter Time" labelText="Time:"></FormField>        

            <FormField id="role" type="text" onChange={(e) => updatePracInfo("role", e.target.value)}
                placeholder="Enter Role" labelText="Role:"></FormField>        

            <FormField id="location" type="location" onChange={(e) => updatePracInfo("location", e.target.value)}
                placeholder="Enter Location" labelText="Location:"></FormField>        

            <div class="form-field">
                <label for="responsibilities">Responsibilities</label>
                <textarea name="responsibilities" id="responsibilities" placeholder="Responsibilities"
                    onChange={(e) => updatePracInfo("resp", e.target.value)}></textarea>
                {/* <input id={id} type={type}
                onChange={onChange} placeholder={placeholder}></input> */}
            </div>

            {/* <DropdownEntry bulletPoints={bulletPoints} setBulletPoints={setBulletPoints}
            entry={entry} setResume={setResume}></DropdownEntry> */}

            <button class="remove-btn" onClick={() => removeEntry(entry.id)}><TrashIcon class="btn-icon"></TrashIcon>
</button>
                    </div>
        {/* <label for="Role">Role:</label>
        <input id="Role" type="text" 
            onChange={(e) => updatePracInfo("role", e.target.value)}/>

        <label for="time">Time:</label>
        <input id="time" type="text" 
            onChange={(e) => updatePracInfo("time", e.target.value)}/>

        <label for="location">Location:</label>
        <input id="location" type="text" 
            onChange={(e) => updatePracInfo("location", e.target.value)}/> */}

    </div>
}

export default PracInfoEntry