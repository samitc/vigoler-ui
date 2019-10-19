import React, { Component } from 'react'
import App from '../App.js'
import Button from '@material-ui/core/Button'
import { PulseLoader } from 'react-spinners';

export default class Video extends Component {
    static FETCH_VIDEO_PERIODIC = 1000;

    constructor(props) {
        super(props);
        let downloadUrl = null
        if (props.video.finish) {
            downloadUrl = App.URL + "/" + this.props.video.id + "/download";
        }
        this.state = { downloadUrl: downloadUrl, isDownloading: false, ids: [] };
        this.startDownloadVideo = this.startDownloadVideo.bind(this);
        this.fetchVideo = this.fetchVideo.bind(this);
        this.downloadVideoTimeout = null
    }

    componentWillUnmount() {
        if (this.downloadVideoTimeout !== null) {
            clearTimeout(this.downloadVideoTimeout)
        }
    }

    startDownloadVideo() {
        this.setState({ isDownloading: true });
        fetch(App.URL + "/" + this.props.video.id,
            {
                method: 'POST'
            }).then(response => {
                if (response.status === 200) {
                    this.downloadVideoTimeout = setTimeout(this.fetchVideo, Video.FETCH_VIDEO_PERIODIC)
                }
            });
    }

    fetchVideo() {
        if (this.state.downloadUrl === null) {
            fetch(App.URL + "/" + this.props.video.id,
                {
                    method: 'GET'
                }).then(response => {
                    if (response.status === 200) {
                        this.setState({ downloadUrl: App.URL + "/" + this.props.video.id + "/download" });
                    }
                    else if (response.status === 202) {
                        response.json().then(video => {
                            if (video.ids != null) {
                                let newIds = video.ids.filter(x => !this.state.ids.includes(x));
                                for (let id of newIds) {
                                    this.props.addVideoCallback(id)
                                }
                                this.setState({ ids: video.ids })
                            }
                            this.downloadVideoTimeout = setTimeout(this.fetchVideo, Video.FETCH_VIDEO_PERIODIC)
                        })
                    }
                });
        }
    }

    render() {
        const createProcessArea = () => {
            return (
                <div className='Flex-div'>
                    <Button disabled>{this.props.video.name}</Button>
                    {this.state.isDownloading ?
                        <div className='Download-Video'>
                            <PulseLoader
                                loading={this.state.isDownloading}
                                sizeUnit={"px"}
                                size={15}
                                color={"blue"}
                            /></div> :
                        <Button onClick={this.startDownloadVideo}>process</Button>}
                </div>
            )
        };
        return (
            <div>
                {this.state.downloadUrl === null && createProcessArea()}
                {this.state.downloadUrl !== null &&
                    <Button href={this.state.downloadUrl}>{this.props.video.name}</Button>}
            </div>
        );
    }
}