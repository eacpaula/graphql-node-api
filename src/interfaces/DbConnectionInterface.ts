import * as Sequelize from 'sequelize';
import { ModelsInterface } from './ModelsInterface';

export interface DbCoonnectionInterface extends ModelsInterface { 
    sequelize: Sequelize.Sequelize
}