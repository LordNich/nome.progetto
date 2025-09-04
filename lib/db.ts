import { openDB } from 'idb';

export async function getDB() {
  return openDB('stopschermo', 1, {
    upgrade(db) {
      db.createObjectStore('data');
    }
  });
}
