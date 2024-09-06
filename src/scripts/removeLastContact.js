import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const removeLastContact = () => {
    fs.readFile(PATH_DB, 'utf8')
        .then(data => {
            const contacts = JSON.parse(data);
            if (contacts.length > 0) {
                contacts.pop();
                return fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
            } else {
                console.log('No contacts to remove.');
            }
        })
        .then(() => console.log('Successfully removed the last contact.'))
        .catch(error => console.error('Error removing the last contact:', error));
};

removeLastContact();