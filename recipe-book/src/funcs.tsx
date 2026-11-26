import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './s__firebaseConfig'
import { getDatabase, ref, set } from 'firebase/database';

export const firebase = initializeApp(firebaseConfig);
export const db = getDatabase(firebase);

export const commit = async (path: string, data: any) => {
    const newDocumentRef = ref(db, path);
    set(newDocumentRef, data).catch((error) => {
        console.error(`An error occurred while commiting to ${path}: ${error}`)
    })
};