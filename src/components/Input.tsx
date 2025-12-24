import '../styles/styles.css';

function Input({ label, inputType }: { label: string, inputType?: string }) {
    return (
        <div className="form-input-component">
            <input id={'formInput-' + label} className="form-input" required type={inputType == null ? "text" : inputType} pattern={inputType == "tel" ? "[ -9]{8,15}" : "[A-Za-z\s'-]+"} placeholder={""} />
            <label htmlFor={'formInput-' + label} className="form-label">{label + ' '}</label>
        </div>
    )
}

export default Input;