// import { visit, waitForStore } from '../../utils';
import { visit } from '../../utils';

describe('Form Validation Problem', () => {
    before(() => {
        visit();

        // waitForStore();
    });

    context('when the email is provided', () => {
        it('should be a valid address', () => {
        });

        it('should throw on error', () => {

        });
    });

    context('when the password is provided', () => {
        it('should be longer than 8 characters', () => {

        });

        it('should throw on error', () => {

        });
    });

    it('should have the colour selected', () => {

    });

    it('should choose at least 2 animals', () => {

    });

    context('when the Tiger is one of the chosen Animals', () => {
        it('should have a non-empty string as type of the tiger', () => {

        });

        it('should throw on error', () => {

        });
    });

    context('when the form is submitted and an error occurs', () => {
        it('should have the CSS error class added to the error element\'s parent', () => {

        });
    });
});
