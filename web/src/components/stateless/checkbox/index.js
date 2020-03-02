import React from 'react'

export default ({ label, checked, onChange }) => {

    return (
        <label className="checkbox">
            <span className={checked ? 'checkbox-square checked' : "checkbox-square"}>✓</span>
            <input
                checked={checked}
                onChange={onChange}
                type="checkbox"
                className="hidden"
            />
            {label}
        </label>
    )
}