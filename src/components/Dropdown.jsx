import { useState } from "react"

// function Dropdown({elements, createEntry, updateEntry, deleteEntry, type, id}) {
function Dropdown({header, active, update}) {
    //list of labels, inputs
    //update fcn for each 
    //delete fcn
    //create fcn for each
    

    // const [visible, setVisible] = useState(true)

    // elements is list of objs each holding the data needed for html elements
    const renderEntries = () => {
        return <>
            {elements.map((element, index) => {
                return <>
            <label for={element.id}>Location:</label>
            <input id={element.id} type={element.type ? element.type : "text"}
            onChange={(e) => updateEntry(element.keyInfo, e.target.value)} value={elements.value}/>

            {type === "edit" && <button onClick={() => deleteEntry(index)}>Delete Entry</button>}
                </>
            })}
        </>
    }

        return <div class="entry-header vertical-dd" onClick={update}>
            {header}
            <div class="chevron-container">
                <span class={`chevron-left ${active ? "active" : "inactive"}`}></span>
                <span class={`chevron-right ${active ? "active" : "inactive"}`}></span>
            </div>
        </div>
//     return <>
//         <button onClick={() => setVisible(prevVisible => !prevVisible)}>Toggle Visibility</button>
// <div class={`dropdown ${visible ? "active" : "inactive"}`}>
//         {renderEntries()}
//         {type === "static" && <button onClick={() => deleteEntry(id)}>Delete Entry</button>}
//         <button onClick={createEntry}>Create Entry</button>
//     </div>

//     </>
    }

export default Dropdown