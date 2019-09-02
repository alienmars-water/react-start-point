// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { fetchUser } from '../../services/commonApi';

export const UserForm = ({ redirect, onClick }) => (
    <div>
        Component name convention is always the folder structure - User + Form = ScreensUserForm.
        <div>
            <button onClick={() => onClick()} >
                Click {redirect}
            </button>
        </div>
    </div>
);

UserForm.propTypes = {
    redirect: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

function withApiService(Component) {
    return class extends React.Component {
        render() {
            return <Component
                redirect="Home"
                onClick={() => this.getUser()}
            />
        }

        async getUser() {
            await fetchUser()
                .then(function (user) {
                    console.log(user)
                })
        }
    }
}

export default withApiService(UserForm);