import { Request, Response } from 'express';
const data = require('../data');

function getDataForm (req: Request, res: Response) {
    try {
        let items = data.default.items;
        return res.status(200).json(items);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getDataForm,
};