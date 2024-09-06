import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = (num) => {
    fs.readFile(PATH_DB, 'utf8')
        .then(data => {
            const contacts = JSON.parse(data);
            for (let i = 0; i < num; i++) {
                contacts.push(createFakeContact());
            }
            return fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        })
        .then(() => console.log(`Successfully generated ${num} contacts.`))
        .catch(error => console.error('Error generating contacts:', error));
};

generateContacts(5); 