async function fetchId() {
try {  
const [posts, users, randomuser] = await Promise.any([
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json()),
    fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json()),
    fetch('https://randomuser.me/api/?results=3').then(response => response.json())
]);
console.log(id);
} catch (error) {
    console.error('faile',error.errors);
}
}
