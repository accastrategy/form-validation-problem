import React, { useState } from 'react';

const Input = ({ type, className = '', value = '', id, dataAuto, onTextChange = null }) => {
    const [inputValue, setInputValue] = useState(value);

    function handleInputChange(eventKey) {
        setInputValue(eventKey.target.value);
        onTextChange && onTextChange(inputValue);
    }

    return (
        <input
          type={type}
          className={className}
          id={id}
          name={name}
          data-auto={dataAuto}
          value={inputValue}
          onChange={handleInputChange}
        />
    );
};

export default Input;
