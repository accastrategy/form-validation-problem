import React, { useState, useMemo } from 'react';

import Details from './components/Details';
import AnimalPicker from './components/AnimalPicker';
import AccountCreator from './components/AccountCreator';

import AllowSubmissionContext from './AllowSubmissionContext';

const Form = () => {
    const [allowSubmission, setAllowSubmission] = useState(false);

    const providerAllowSubmission = useMemo(() => ({ allowSubmission, setAllowSubmission }), [allowSubmission, setAllowSubmission]);

    console.log('Form');

    return (
        <AllowSubmissionContext.Provider
          value={providerAllowSubmission}
        >
        <form method='post' action=''>
            <Details />
            <AnimalPicker />
            <AccountCreator />
        </form>
        </AllowSubmissionContext.Provider>
    );
};

export default Form;
