const axios = require("axios");

let results = [];
const getData = async () => {
    return await axios.get(
        `https://saucelabs.com/versions.json`
    ).then(response => {
        // console.log(response.data);
        const newItem = {
            download_url: response.data.download_url,
            sha1: response.data?.sha1,
        };
        results.push(newItem);
        console.log(results);
        return results;
    }).catch(err => console.log(err));
};

getData();