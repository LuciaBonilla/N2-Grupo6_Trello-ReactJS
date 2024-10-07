// TERMINADO.
function SelectionInput({labelName, options, setState, value}) {
    return (
        <label className="task-form__input">
            {labelName}
            <select name={labelName} onChange={(event) => setState(event.target.value)} value={value}>
                {options.map((option) => <option key={option}>{option}</option>)}
            </select>
        </label>
    );
}

export default SelectionInput;