function fetchData() {
    return fetch('')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
await fetchData2();

async function fetchData2() { 
    try {
    const response = await fetch('http://jsoonplacrholder.tpicode.com/posts/l');
    const data = await response.json();
    consoel.log(data);
    } catch (error) {
        console.error(error)
    }
}
await fetchData2();
