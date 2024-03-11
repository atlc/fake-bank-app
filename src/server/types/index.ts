export interface BaseUser {
    name: string;
    email: string;
    password: string;
}

export interface User extends BaseUser {
    id: number;
    // roles: string[];
    created_at: string | Date;
    updated_at?: string | Date;
}

export interface BaseAccount {
    name: string;
    balance: number;
    user_id: User["id"];
}

export interface Account extends BaseAccount {
    id: number;
    created_at: string | Date;
    updated_at?: string | Date;
}
