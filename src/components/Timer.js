import React, { Component } from 'react';

export class Timer extends Component {
    render() {
        const {
            start,
            stop,
            reset,
            time,
            status
        } = this.props;

        return <div>
            <p>
                { time } ({ status })
            </p>
            <button
                disabled={status === 'Running'}
                onClick={() => reset()}
            >
                Reset
            </button>
            <button
                disabled={status === 'Running'}
                onClick={() => start()}
            >
                Start
            </button>
            <button
                disabled={status === 'Stopped'}
                onClick={stop}
            >
                Stop
            </button>
        </div>
    }
}