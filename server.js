const config ={
    host: 'localhost',
    port: 5432,
    database: 'likeypixdb'
};

const pgp =require('pg-promise')();
const db = pgp(config);

db.query('SELECT * FROM users')
    .then(res => {
        res.forEach((user) =>{
            console.log(user.name)
        })
    })
    .catch((e) => {
        console.log('chill');
        console.log(e);
    }) 
    
    pgp.end();