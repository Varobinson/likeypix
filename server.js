const config ={
    host: 'localhost',
    port: 5432,
    database: 'likeypixdb'
};

const pgp =require('pg-promise')();
const db = pgp(config);

// db.query('SELECT * FROM users')
//     .then(res => {
//         res.forEach((user) =>{
//             console.log(user.name)
//         })
//     })
//     .catch((e) => {
//         console.log('chill');
//         console.log(e);
//     }) 
    


    //get all users and read
// function getAllUsers(){
//     db.many('SELECT * FROM users;')
//     .then(users => {
//         users.forEach((user) =>{
//             console.log(`${user.name}: ${user.email}`)
//         })
//     })
//     .catch((e) => {
//         console.log(e);
//     }) 
// }

// getAllUsers();

// //get all posts and read
// function getAllPosts(){
//     db.many('SELECT * FROM posts;')
//     .then(posts => {
//         posts.forEach((post) =>{
//             console.log(`${post.user_id}: ${post.url}`)
//         })
//     })
//     .catch((e) => {
//         console.log(e);
//     }) 
// }
// getAllPosts();

// function getUserById(userId){
//     return db.one('SELECT name FROM users WHERE id = $1;', userId)
//     .then(user => {
//         return user
//     })
//     .catch((e) => {
//         console.log(e);
//     }) 
// }

// function getPostsByUserId(userId){
//     const userPromise = getUserById(userId)
//     console.log(userPromise)
//     userPromise.then(theUser =>{
//         console.log(theUser)
//     })
// }
// getPostsByUserId(3)



// function getPostsFrom1User(userId){
//     db.many(`
//         SELECT * FROM posts 
//         WHERE user_id = (${userId});`)
//     .then((posts) => {
//         posts.forEach((post) =>{
//             console.log(`${post.id}: ${post.url}`)
//         })
//     })
//     .catch((e) => {
//         console.log(e);
//     }) 
// }

// getPostsFrom1User(2);



