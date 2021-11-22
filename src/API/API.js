const URL = `https://yalantis-react-school-api.yalantis.com/api/task0/users`


const API = fetch(URL).then((response) => {
    return response.json();
})



export default API