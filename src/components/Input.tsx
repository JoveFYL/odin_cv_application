import '../styles/styles.css';

function Input({ label, field, inputType, value, onChange }: { label: string, field: string, value: string, inputType?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    const id = crypto.randomUUID();
    return (
        <div className="form-input-component">
            <input id={id} className="form-input" data-field={field} required type={inputType == null ? "text" : inputType} pattern={inputType == "tel" ? "[0-9+]{8,15}" : "[A-Za-z\\s'-]+"} placeholder={""} onChange={onChange} value={value} />
            <label htmlFor={id} className="form-label">{label + ' '}</label>
        </div>
    )
}

export default Input;