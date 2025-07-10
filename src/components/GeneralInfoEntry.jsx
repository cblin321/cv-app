import { useState } from "react";
import Dropdown from "./Dropdown";
import FormField from "./FormField";
function GeneralInfoEntry({resume, setResume}) {
    //name
    //phone
    //address
    //linkedin
    const [visible, setVisibile] = useState(false)
    const updateGeneralInfo = (infoKey, val) => {
        setResume(prevInfo => ({
                ...prevInfo,
                general: {
                    ...prevInfo.general,
                    [infoKey]: val
                }
            }))
    }


    const render = () => {
        return <div class={`entry-fields fields entry ${visible ? "active" : "inactive"}`}>
{/* {id, type, placeholder, labelText, onChange} */}
            <FormField id={"name"} type={"text"} placeholder={"Name"} inputValue={general.name}
             labelText={"Name: "} onChange={(e) => updateGeneralInfo("name", e.target.value)}></FormField> 
            <FormField id={"phone"} type={"text"} placeholder={"Phone"} inputValue={general.phone}
             labelText={"Phone:"} onChange={(e) => updateGeneralInfo("phone", e.target.value)}></FormField> 
            <FormField id={"email"} type={"text"} placeholder={"Email"} inputValue={general.email}
             labelText={"Email:"} onChange={(e) => updateGeneralInfo("email", e.target.value)}></FormField> 
            <FormField id={"linkedin"} type={"text"} placeholder={"Linkedin"} inputValue={general.linkedin}
             labelText={"Linkedin:"} onChange={(e) => updateGeneralInfo("linkedin", e.target.value)}></FormField> 
            {/* <label for="name">Name:</label>
            <input id="name" value={general.name} onChange={(e) => updateGeneralInfo("name", e.target.value)}></input>

            <label for="name">Phone Number:</label>
            <input id="phone" type="tel" value={general.phone} onChange={(e) => updateGeneralInfo("phone", e.target.value)}></input>
            
            <label for="name">Email:</label>
            <input id="email" type ="email" value={general.email} onChange={(e) => updateGeneralInfo("email", e.target.value)}></input>

            <label for="name">Linkedin:</label>
            <input id="linkedin" type ="url" value={general.linkedin} onChange={(e) => updateGeneralInfo("linkedin", e.target.value)}></input> */}

        </div>
    }

    const updateVisible = () => {
        setVisibile(prevVisible => !prevVisible)
    }
    const general = resume.general
    return <div class="vertical-dd entry-form">
        <Dropdown header={<h1>Personal Info</h1>} active={visible} update={updateVisible}>
        </Dropdown>
            {/* <div class="chevron-container">
                <span class={`chevron-left ${visible ? "active" : "inactive"}`}></span>
                <span class={`chevron-right ${visible ? "active" : "inactive"}`}></span>
            </div> */}
        {render()}
    </div>
}

export default GeneralInfoEntry