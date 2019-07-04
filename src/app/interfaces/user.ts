export interface User {
    err: number;
    data: UserData;
    msg: string;
}
export interface UserData{
    _id: string;
    name: string;
    password: string;
}
