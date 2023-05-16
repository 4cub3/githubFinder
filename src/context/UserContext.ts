import { createContext } from 'react';

interface UserContextTypes {
    users: { id: number, avatar_url: string, login: string; html_url: string; type: string; }[];
    searchUser: (a: string | undefined) => void;
    noUserFound: boolean | null;
    userHandler: () => void;
    message: string;
    isLoading: boolean
}
export const UserContext = createContext<UserContextTypes>({
    users: [{ id: 0, avatar_url: '', login: '', html_url: '', type: '',}],
    searchUser: () => { },
    noUserFound: null,
    userHandler: () => { },
    message: '',
    isLoading : false,

})

