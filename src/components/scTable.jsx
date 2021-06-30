import React from "react";
const axios = require("axios");

export default class scTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            latest_version: "",
        }
    }
    getData = async() => {
        try{
            // const url = process.env.REACT_APP_SC_URL;
            const url = `https://api.us-west-1.saucelabs.com/rest/v1/public/tunnels/info/versions`
            let i = 0;
            const res = await axios.get(url);
            const version = res.data.latest_version;
            const results = Object.entries(res.data.downloads)
                .map(([key, val])=>({platform: key, ...val, id: i++, ...val}));
            setTimeout(() => {
                console.log('Updated Sauce Connect Table Versions fetched');
                this.setState({
                    data: results,
                    latest_version: version
                })
            }, 1000)
        } catch (err) {
            console.log(err);
        }
    }
    componentDidMount(){
        this.getData();
    }
    render() {
        return(
            <div className="Table">
                <p>Latest Version: {this.state.latest_version}</p>
                <table>
                    <thead>
                    <tr>
                        <th>Platform</th>
                        <th>Download URL</th>
                        <th>SHA1 Checksum</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map(data => (
                            <tr key={data.id} className={"table-row"}>
                                <td key="{platform}">{data.platform}</td>
                                <td key="{download_url}"><a href={data.download_url}> {data.download_url}</a></td>
                                <td key="{sha1}">{data.sha1}</td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        )
    }

}

