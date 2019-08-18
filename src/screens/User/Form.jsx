import React from 'react';

import UserForm from '../../components/User/Form';
import { Warning } from '../../components/Shared';

const ScreensUserForm = () => (
    <div>
        <p>Screen name convention always come with Screens as prefix, plus folder structure - User + Form = ScreensUserForm.</p>
        <UserForm />
        <Warning />
    </div>
);

export default ScreensUserForm;