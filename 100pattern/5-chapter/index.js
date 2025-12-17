function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
await fetchData2();

async function fetchData2() { 
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    consoel.log(data);
    } catch (error) {
        console.error(error)
    }
}
await fetchData2();

const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const data = await response.json();
console.log(data);
