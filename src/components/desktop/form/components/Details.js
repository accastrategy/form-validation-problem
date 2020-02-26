import React, { useState, useEffect, useContext } from 'react';

import classNames from 'classnames';
import Label from '../../../universal/label';
import Input from '../../../universal/input';

import AllowSubmissionContext from '../AllowSubmissionContext';

const Details = () => {
  const { setAllowSubmission } = useContext(AllowSubmissionContext);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const emailClassName = classNames({
    error: !isEmailValid,
  });

  console.log('emailClassName: ', emailClassName);

  const passwordClassName = classNames({
    error: !isPasswordValid,
  });

  console.log('passwordClassName: ', passwordClassName);

  function getEmailInput() {
    return (
         <Input
           type='text'
           id='email'
           name='email'
           onTextChange={(value) => {
              if (value.includes('@')) {
                setIsEmailValid(true);
              }
            }}
         />
    );
  }

  useEffect(() => {
    console.log('useEffect isEmailValid && isPasswordValid: ', isEmailValid && isPasswordValid);

    setAllowSubmission(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  return (


    <>
        <h1>Fill out this awesome form</h1>
        <fieldset>
            <h3>Your details</h3>
            <p className={emailClassName}>
                <Label
                  className='label'
                  message='Email'
                  labelFor='email'
                />
                {getEmailInput()}
            </p>
            <p className={passwordClassName}>
                <Label
                  className='label'
                  message='Password'
                  labelFor='password'
                />
                <Input
                  type='password'
                  id='password'
                  name='username'
                  onTextChange={(value) => {
                    if (value.length >= 8) {
                      setIsPasswordValid(true);
                    }
                  }}
                />
            </p>
        </fieldset>
    </>
);
};

export default Details;
