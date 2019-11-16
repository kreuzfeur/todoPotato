//react
import React from 'react';
//components
import { BibapiConsumer } from '../bibapi-service-context';

const withBibapi = (Wrapped) => {
    return (props) => {
        return (
            <BibapiConsumer>
                {
                    (bibapi) => {
                        return (
                            <Wrapped {...props} bibapi={bibapi} />
                        )
                    }
                }
            </BibapiConsumer>
        )
    }
}
export default withBibapi
