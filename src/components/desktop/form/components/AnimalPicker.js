import React, { useState, useContext } from 'react';

import classNames from 'classnames';
import {
    getOptions,
    getAnimals,
} from '../../../../utils/DataHelper';

import ColourPicker from '../../../universal/colourPicker';
import Label from '../../../universal/label';
import Input from '../../../universal/input';

import AllowSubmissionContext from '../AllowSubmissionContext';

const AnimalPicker = () => {
    const { setAllowSubmission } = useContext(AllowSubmissionContext);

    const options = getOptions();
    const animals = getAnimals();

    console.log('options: ', options);

    const [selectedAnimals, setSelectedAnimals] = useState([]);

    const animalsClassName = classNames({
        error: selectedAnimals.length <= 1,
    });

    return (
        <fieldset>
                <h3>Your animal</h3>
                <ColourPicker options={options} />
                <p>
                    <span className='label'>
                        Animal
                    </span>
                    <Input
                      type='checkbox'
                      name='animal'
                      value='bear'
                      id='bear'
                    />
                </p>
                <p>
                    {animals.map(({ name, value, id, labelFor, message }) => (
                        <>
                            <Input
                              className={animalsClassName}
                              type='checkbox'
                              name={name}
                              value={value}
                              id={id}
                              onChange={() => {
                                setSelectedAnimals([...selectedAnimals, name]);
                                setAllowSubmission(selectedAnimals.length >= 2);
                              }}
                            />
                            <Label labelFor={labelFor}>
                                {message}
                            </Label>
                        </>
                    ))}
                </p>
                <p>
                    <Label
                      className='label'
                      labelFor='tiger_type'
                    >
                        Type of tiger
                    </Label>
                    <Input
                      type='text'
                      name='tiger_type'
                      id='tiger_type'
                    />
                </p>
        </fieldset>
    );
};

export default AnimalPicker;
