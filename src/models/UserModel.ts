import * as Sequelize from "sequelize";

export interface UserAttributos {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    photo?: string;
}

export interface UserInstance extends Sequelize.Instance<UserAttributos>, UserAttributos {
    
}