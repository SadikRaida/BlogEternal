const { Client } = require('pg');

// Configuration de la connexion
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'eternal',
  password: '2345',
  port: 5432,
});

// Connexion à la base de données
client.connect()
  .then(() => {
    console.log('Connexion à PostgreSQL réussie !');
    return client.end();
  })
  .catch(err => {
    console.error('Erreur de connexion à PostgreSQL', err.stack);
  });
