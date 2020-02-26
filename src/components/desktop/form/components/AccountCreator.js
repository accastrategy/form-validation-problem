import React, { useContext } from 'react';

import Input from '../../../universal/input';

import AllowSubmissionContext from '../AllowSubmissionContext';

const AccountCreator = () => {
    const { allowSubmission } = useContext(AllowSubmissionContext);

    console.log('AccountCreator allowSubmission: ', allowSubmission);

    return (
        <fieldset>
            <p>
                <Input
                  disabled={!allowSubmission}
                  type='submit'
                  value='Create account'
                  onClick={() => console.log('Done')}
                />
            </p>
        </fieldset>
    );
};

export default AccountCreator;
