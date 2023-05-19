 export interface SpeciffiedUserType {
    bio: string;
    followers: number;
    following: number;
    name: string;
    public_gists: number;
    public_repos: number;
    twitter_username: string;
    type: string;
    html_url: string;
    location: string | null;
    blog: string;
    hireable: string | null;
    avatar_url: string;
    login : string;
  }
  export interface RepoTypes {
    id: number;
    name: string;
    description: string;
    watchers_count: number;
    stargazers_count: number;
    forks: number;
    open_issues: number;
    html_url: string;
  }
  export interface UserContextTypes {
    users: { id: number, avatar_url: string, login: string; html_url: string; type: string; }[];
    searchUser: (a: string | undefined) => void;
    noUserFound: boolean | null;
    userHandler: () => void;
    message: string;
    isLoading: boolean
}
export type DataType = { items: []; } | object[]