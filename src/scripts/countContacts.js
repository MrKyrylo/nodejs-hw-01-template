import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const countContacts = () => {
    fs.readFile(PATH_DB, 'utf8')
        .then(data => {
            const contacts = JSON.parse(data);
            console.log(`Total contacts: ${contacts.length}`);
        })
        .catch(error => console.error('Error counting contacts:', error));
};

countContacts();