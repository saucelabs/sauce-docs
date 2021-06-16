const axios = require("axios");
const url = `https://api.us-west-1.saucelabs.com/rest/v1/public/tunnels/info/versions`
const getData = async () => {
    return await axios.get(url
    ).then(response => {
        const results = Object.entries(response.data.downloads)
            .map(([key, val])=>({platform: key, ...val}));
        console.log(results);
        return results;
    }).catch(err => console.log(err));
};
getData();
