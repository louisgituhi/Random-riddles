const axios = require('axios');

try {
    axios.get(' https://riddles-api.vercel.app/random')
    .then((res) => {
        console.log(res.data);
})
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}