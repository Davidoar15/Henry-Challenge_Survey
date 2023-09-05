"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const sequelize_typescript_1 = require("sequelize-typescript");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const AnswerModel = require('../models/answer.model');
const sequelize = new sequelize_typescript_1.Sequelize(
// URL
`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/survey`, { logging: false, native: false });
AnswerModel(sequelize);
const { Answer } = sequelize.models;
module.exports = {
    Answer,
    conn: sequelize,
};
