import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./input.sass";

export default class Input extends Component {

    state = {
        name: this.props.name,
        place:  this.props.placehold,
        val: this.props.val,
        require: this.props.required,
        error: true
    };

    render() {

        let { place, require, name, val } = this.state;

        return (
            <React.Fragment>
                <input
                    type="text"
                    name={name}
                    placeholder={place}
                    defaultValue={val}
                />
            </React.Fragment>
        )
    }
};
