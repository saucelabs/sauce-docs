const axios = require("axios");

const getData = async () => {
    return await axios.get(
        `https://api.us-west-1.saucelabs.com/rest/v1/public/tunnels/info/versions`
    ).then(response => {
        const dictionary = response.data.downloads;
        /* Create new array, iterate over the dictionary, and push values into new array */
        let results = [];

        for (let key in dictionary) {
            // console.log(key);
            if (dictionary.hasOwnProperty(key)) {
                // results.push(key);
                results.push(dictionary[key]);
            }
        }
        /* Add an id number to each iteration */
        results.forEach((item, index) => {
            item.id = index++;
        });
        console.log(results);
        return results;
    }).catch(err => console.log(err));
};
getData();