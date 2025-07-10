function FormField({id, type, placeholder, labelText, onChange, inputValue}) {

    return <div class="form-field">
        <label for={id}>{labelText}</label>
        <input value={inputValue} id={id} type={type}
        onChange={onChange} placeholder={placeholder}></input>
    </div>
}

export default FormField