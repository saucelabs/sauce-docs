// Author: James Tacker i.e. spider-sauce

import React from 'react';
const axios = require('axios');

export default class scTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            latest_version: '',
        };
    }
    setUrl = async () => {
        let url;
        if (
            location.hostname === 'localhost' ||
            location.hostname === '127.0.0.1'
        ) {
            url = '/src/components/versions.json';
        } else {
            url = `https://api.us-west-1.saucelabs.com/rest/v1/public/tunnels/info/versions`;
        }
        return url;
    };
    getData = async () => {
        try {
            let i = 0;
            const url = await this.setUrl();
            //alert("using: " + url);
            const res = await axios.get(url);
            const version = res.data.latest_version;
            const results = Object.entries(res.data.downloads).map(
                ([key, val]) => ({ platform: key, ...val, id: i++, ...val })
            );
            setTimeout(() => {
                console.log('Updated Sauce Connect Table Versions fetched');
                this.setState({
                    data: results,
                    latest_version: version,
                });
            }, 0);
        } catch (err) {
            console.log(err);
        }
    };

    componentDidMount() {
        this.getData()
            .then(() => this.setState({ loading: false }))
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        let content = this.state.loading ? (
            'Fetching data, please wait...'
        ) : (
            <a
                href={
                    'https://changelog.saucelabs.com/en?category=sauce%20connect'
                }
            >
                {this.state.latest_version}
            </a>
        );
        return (
            <div className='Table'>
                <p>Latest Version: {content}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Platform</th>
                            <th>Download URL</th>
                            <th>SHA1 Checksum</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((data) => (
                            <tr key={data.id} className={'table-row'}>
                                <td key='{platform}'>{data.platform}</td>
                                <td key='{download_url}'>
                                    <a href={data.download_url}>
                                        {' '}
                                        {data.download_url}
                                    </a>
                                </td>
                                <td key='{sha1}'>{data.sha1}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
