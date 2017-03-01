export interface User {
    name?: string;
    id?: string;
    imageUrl?: string;
    email : string;
    phone? : string;
    friends? : string[];
    userGroups? : string[];
}