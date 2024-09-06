import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const removeAllContacts = () => {
    fs.writeFile(PATH_DB, JSON.stringify([], null, 2))
        .then(() => console.log('Successfully removed all contacts.'))
        .catch(error => console.error('Error removing all contacts:', error));
};

removeAllContacts();