function Field({id, type, placeholder, labelText, onChange}) {

    return <div>
        <label for={id}>{labelText}</label>
        <input id={id} type={type}
        onChange={onChange} placeholder={placeholder}></input>
    </div>
}

export default Field