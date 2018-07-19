import React, { Component } from 'react';

class Clock extends Component {
    render() {
        return (
            <div className="clock">
            <div className="clock__days">
                <label className="clock__title clock__box">DAYS</label>
                <label className="clock__amount">300</label>
            </div>
            <div className="clock__hours">
                <label className="clock__title clock__box">HRS</label>
                <label className="clock__amount">16</label>
            </div>
            <div className="clock__minutes">
                <label className="clock__title clock__box">MINS</label>
                <label className="clock__amount">42</label>
            </div>
            <div className="clock__seconds">
                <label className="clock__title clock__box">SEC</label>
                <label className="clock__amount">22</label>
            </div>
            </div>
        )
    }
}
export default Clock;