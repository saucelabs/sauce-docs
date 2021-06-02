import React from "react";
import Table from "./Table";
import axios from 'axios';

// const getData = () => {
//     axios({
//         url: '',
//     }).then(response => {
//
//     })
// }
const ScTable = () => {
    const theadData = ["Platform", "Download Link", "SHA1 Checksum"];
    const tbodyData = [
        {
            id: "1",
            items: ["linux", "https://saucelabs.com/downloads/sc-4.6.5-linux.tar.gz", "caa05e8779f4e052463a63e1b38f6362473ce644"]
        },
        {
            id: "2",
            items: ["osx", "https://saucelabs.com/downloads/sc-4.6.5-osx.zip", "caa05e8779f4e052463a63e1b38f6362473ce644"]
        },
        {
            id: "3",
            items: ["win32", "https://saucelabs.com/downloads/sc-4.6.5-win32.zip", "4431030b57dc0c416ea59a2afa6738b0de59dc80"]
        },
    ];
    return(
        <div>
            <Table theadData={theadData} tbodyData={tbodyData} />
        </div>
    );
};
export default ScTable;
