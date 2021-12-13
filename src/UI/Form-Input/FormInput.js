import React from 'react';

import styles from './FormInput.module.css';

const FormInput = ({
  id,
  value,
  onBlur,
  onChange,
  onFocus,
  type,
  label,
  htmlFor,
  formControlStyle,
  inputStyle,
  labelStyle,
}) => {
  return (
    <div className={`${styles['form-control']} ${formControlStyle}`}>
      <input
        className={inputStyle}
        id={id}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        type={type}
      ></input>
      <label className={labelStyle} htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  );
};

export default FormInput;
