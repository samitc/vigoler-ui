import React, { Component } from 'react'
import { toast } from 'react-toastify';
export default class Error extends Component {
    constructor(props) {
        super(props);
        this.state = { isStillShow: true }
        setTimeout(() => {
            this.setState({ isStillShow: false })
            if (props.timeoutCallback != null) {
                props.timeoutCallback()
            }
        }, props.timeout)
        toast(props.errorMessage, {
            type: 'error',
        })
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}