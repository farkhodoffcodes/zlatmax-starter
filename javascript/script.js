const URL = 'http://localhost:3000/category';

fetch(URL).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
})