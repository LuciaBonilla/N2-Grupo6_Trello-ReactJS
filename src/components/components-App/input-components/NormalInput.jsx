// TERMINADO.
function NormalInput({labelName, type, placeholder, setState, value}) {
    return (
        <label className="task-form__input">
            {labelName}
            <input type={type} placeholder={placeholder} onChange={(event) => setState(event.target.value)} value={value} />
        </label>
    );
}

export default NormalInput;