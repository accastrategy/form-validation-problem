import React from 'react';

const Select = ({ options, name, id }) => {
    function renderOptions() {
        return options.map(({ value, optionName }) => (
            <option key={value} value={value}>
                {optionName}
            </option>
        ));
    }

    return (
        <select
          name={name}
          id={id}
        >
            {renderOptions()}
        </select>
    );
};

export default Select;
