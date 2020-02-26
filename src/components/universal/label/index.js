import React from 'react';

const Label = ({ required = false, className, message, labelFor }) => (
        <label
          required={required}
          className={className}
          htmlFor={labelFor}
        >
            {message}
        </label>
    );

export default Label;
