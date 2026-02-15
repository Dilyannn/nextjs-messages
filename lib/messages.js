import { cache } from 'react';
import { unstable_cache } from 'next/cache.js';
import sql from 'better-sqlite3';

const db = new sql('messages.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export const addMessage = cache(function addMessage(message) {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
});

export const getMessages = cache(function getMessages() {
  console.log('Fetching messages from db');
  return db.prepare('SELECT * FROM messages').all();
});
