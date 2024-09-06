import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const getAllContacts = () => {
    fs.readFile(PATH_DB, 'utf8')
        .then(data => {
            const contacts = JSON.parse(data);
            console.log(contacts);
        })
        .catch(error => console.error('Error getting contacts:', error));
};

getAllContacts();