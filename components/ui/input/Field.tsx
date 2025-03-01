import { FC, forwardRef } from 'react';
import { IAuthField } from './field.interface';
import styles from './Field.module.scss'


const Field:  FC<IAuthField> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  type='text',
  as='input',
  required=true,
  className=''

}) => {
    const tailClass = `${className}`;
    
    return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {as === 'input' ? (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={tailClass}
        />
      ) : (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={tailClass}
        />
      )}
    </div>
)}


export default Field; 

