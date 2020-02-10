import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./input.sass";

export default class Input extends Component {

    state = {
        place:  this.props.placehold,
        require: this.props.required,
        error: true
    };

    onInput(e) {
        if (e.target.value) {
            return this.setState({
                error: false
            })
        }
    }

    render() {

        let { place, require, error } = this.state;

        return (
            <React.Fragment>
                <input
                    type="text"
                    className={require ? "error" : null}
                    placeholder={place}
                    onInput={this.onInput.bind(this)}
                />
            </React.Fragment>
        )
    }
};
