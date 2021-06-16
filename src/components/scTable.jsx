import React, {useEffect} from "react";
const axios = require("axios");

const ScTable = async () => {
    return await axios.get(url
    ).then(response => {
        let i = 0;
        const results = Object.entries(response.data.downloads)
            .map(([key, val])=>({platform: key, ...val, id: i++, ...val}));
        console.log(results);
        return(
            <div>
                <table>
                    {getData().map(el => (
                        <tr>
                            <td>{el.platform}</td>
                            <td>{el.download_url}</td>
                            <td>{el.sha1}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }).catch(err => console.log(err));
};
export default ScTable;
