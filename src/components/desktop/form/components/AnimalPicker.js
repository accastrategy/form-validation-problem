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

    const [selectedAnimals, setSelectedAnimals] = useState([]);
    const [isTigerPicked, setIsTigerPicked] = useState(false);

    const animalsClassName = classNames({
        error: selectedAnimals.length <= 1,
    });

    function getTigerType() {
        if (!isTigerPicked) {
            return null;
        }

        return (
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
        );
    }

    return (
        <fieldset>
                <h3>Your animal</h3>
                <ColourPicker options={options} />
                <p>
                    <span className='label'>
                        Animal
                    </span>
                    {animals.map(({ name, value, id, labelFor, message }) => (
                        <>
                            <Label
                              labelFor={labelFor}
                              message={message}
                            />
                            <Input
                              className={animalsClassName}
                              type='checkbox'
                              name={name}
                              value={value}
                              id={id}
                              onCheckBoxSelect={(animalName) => {
                                setSelectedAnimals([...selectedAnimals, animalName]);
                                if (animalName.toLowerCase() === 'tiger') {
                                    setIsTigerPicked(true);
                                }
                                setAllowSubmission(selectedAnimals.length >= 2);
                              }}
                            />

                        </>
                    ))}
                </p>
                {getTigerType()}
        </fieldset>
    );
};

export default AnimalPicker;
