import React, {Component} from 'react';
import Video from './ui/Video.js'
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import {RingLoader} from 'react-spinners';

class App extends Component {
    static URL = "http://127.0.0.1:80/videos";

    constructor(props) {
        super(props);
        this.state = {
            youUrl: "",
            videos: [],
            isLoading: false
        }
    }

    render() {
        const textChange = (text) => {
            this.setState({youUrl: text.target.value})
        };
        const download = () => {
            if (!this.state.isLoading) {
                this.setState({isLoading: true, videos: []});
                fetch(App.URL, {
                    body: this.state.youUrl,
                    method: "POST"
                }).then(value => {
                    value.json().then(value1 => {
                        let vids = this.state.videos;
                        for (let vid of value1) {
                            vids.push(vid)
                        }
                        this.setState({videos: vids, isLoading: false})
                    })
                })
            }
        };
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Download videos from youtube and many more</h2>
                </header>
                <TextField
                    label="video url"
                    className="Video-url"
                    fullWidth
                    value={this.state.youUrl}
                    onChange={textChange}
                />
                <div className='Download-url'>
                    <Button variant="contained" color="primary" className='Download-url' onClick={download}>
                        Download
                    </Button>
                </div>
                {this.state.videos.map(video => <Video key={video.id} video={video}/>)}
                <div className='Video-loading'>
                    <RingLoader loading={this.state.isLoading}
                                sizeUnit={"px"}
                                size={150}
                                color={"blue"}
                    />
                </div>
            </div>
        );
    }
}

export default App;
