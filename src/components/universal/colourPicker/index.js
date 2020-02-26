import React from 'react';

import Label from '../label';
import Select from '../select';

const ColourPicker = ({ options }) => (
    <p>
        <Label
          required
          className='label'
          message='Colour'
          labelFor='colour'
        />
        <Select
          options={options}
          name='colour'
          id='colour'
        />
    </p>
);

export default ColourPicker;
