import { useState } from "react"

function DropdownEntry({bulletPoints, setBulletPoints, entry, setResume}) {

    const render = () => {
        return entry.points.map((key, index) => {
            return <>
                <input key={key} onChange={(e) => editEntry(e.target.value, index)}
                value={bulletPoints[key]}></input>
                <button key={"btn" + key} onClick={() => removeEntry(index)}>Remove point</button>
            </>
        })
    }

    const addEntry = (val) => {
        const id = crypto.randomUUID()
        setBulletPoints(prevPointMapping => ({
            ...prevPointMapping,
            [id]: val
        }))

        setResume(prevResume => ({
            ...prevResume,
            practical: prevResume.practical.map(i => i.id !== entry.id ? i : {
                ...i,
                points: [...i.points, id]
            })
        }))
    }

    const editEntry = (val, index) => {
        console.log(bulletPoints)
        const id = entry.points[index]
        setBulletPoints(prevPointMapping => ({
            ...prevPointMapping,
            [id]: val
        }))
    }

    const omit = (key, obj) => {
        const {[key]: omitted, ...remaining} = obj
        return remaining
    }

    const removeEntry = (index) => {
        const id = entry.points[index] 
        setResume(prevResume => ({
            ...prevResume,
            practical: prevResume.practical.map(i => i.id !== entry.id ? i : {
                ...i,
                points: i.points.filter(j => j !== id)
            })
        }))
        setBulletPoints(prevPoints => omit(id, prevPoints))
    }

    return <div class="vertical-dd entry-form">
        <button onClick={(e) => addEntry(e.target.value)}>Add point</button>
        {render()}
    </div>
}

export default DropdownEntry