// @flow
import React from 'react';

import UserForm, { UserForm as UserFormComponent } from '../../components/User/Form';
import { Warning } from '../../components/Shared';

const ScreensUserForm = () => (
    <div>
        <p>Screen name convention always come with Screens as prefix, plus folder structure - User + Form = ScreensUserForm.</p>
        <UserForm />
        <UserFormComponent redirect={'Login'} onClick={() => console.log('Hello there.')} /> 
        <Warning />
    </div>
);

export default ScreensUserForm;