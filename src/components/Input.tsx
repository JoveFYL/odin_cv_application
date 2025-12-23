import '../styles/styles.css';

function Input({ placeholder, label }: { placeholder: string, label: string }) {
    return (
        <div className="form-input-component">
            <input name={'formInput-' + { label }} className="form-input" type="text" placeholder={""} />
            <label htmlFor={'formInput-' + { label }} className="form-label">{label + ' '}</label>
        </div>
    )
}

export default Input;