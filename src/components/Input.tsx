import '../styles/styles.css';

function Input({ label, inputType, value, onChange }: { label: string, value: string, inputType?: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <div className="form-input-component">
            <input id={'formInput-' + label} className="form-input" required type={inputType == null ? "text" : inputType} pattern={inputType == "tel" ? "[0-9]{8,15}" : "[A-Za-z\\s'-]+"} placeholder={""} onChange={onChange} value={value} />
            <label htmlFor={'formInput-' + label} className="form-label">{label + ' '}</label>
        </div>
    )
}

export default Input;