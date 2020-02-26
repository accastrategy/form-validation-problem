import React, { useState } from 'react';

const Input = ({ type, className = '', value = '', id, dataAuto, onTextChange = null, onCheckBoxSelect = null }) => {
    const [inputValue, setInputValue] = useState(value);

    function handleChange(eventKey) {
        setInputValue(eventKey.target.value);
        onTextChange && onTextChange(eventKey.target.value);
        onCheckBoxSelect && onCheckBoxSelect(eventKey.target.value);
    }

    return (
        <input
          type={type}
          className={className}
          id={id}
          name={name}
          data-auto={dataAuto}
          value={inputValue}
          onChange={handleChange}
        />
    );
};

export default Input;
