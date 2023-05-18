import { createContext } from 'react';
import {UserContextTypes} from '../types/Types';

export const UserContext = createContext<UserContextTypes>({
    users: [{ id: 0, avatar_url: '', login: '', html_url: '', type: '',}],
    searchUser: () => { },
    noUserFound: null,
    userHandler: () => { },
    message: '',
    isLoading : false,

})

