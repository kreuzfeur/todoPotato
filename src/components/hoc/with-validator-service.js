//react
import React from 'react';
//service
import { Validator } from '../../services';

const validator = new Validator();
const withValidatorService = (Wrapped) => {
    return (props) => {
        return <Wrapped {...props} validator={validator} />
    }
}
export default withValidatorService;