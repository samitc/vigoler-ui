import React, {Component} from 'react'
import App from '../App.js'

export default class Video extends Component {
    static FETCH_VIDEO_PERIODIC = 1000;

    constructor(props) {
        super(props);
        this.state = {downloadUrl: null};
        this.fetchVideo = this.fetchVideo.bind(this);
        this.startDownloadVideo();
    }

    startDownloadVideo() {
        fetch(App.URL + "/" + this.props.video.id,
            {
                method: 'POST'
            }).then(response => {
            if (response.status === 200) {
                setTimeout(this.fetchVideo, Video.FETCH_VIDEO_PERIODIC)
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
                    response.body.getReader().cancel();
                    this.setState({downloadUrl: App.URL + "/" + this.props.video.id})
                    this.props.onComplete();
                }
                else {
                    setTimeout(this.fetchVideo, Video.FETCH_VIDEO_PERIODIC)
                }
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.downloadUrl !== null && <a href={this.state.downloadUrl}>{this.props.video.name}</a>}
            </div>
        );
    }
}