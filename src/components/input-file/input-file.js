import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Inputfile extends Component {

    state = {
        selected: true,
        fileName: "1111111111111111111111111111111111111111111111111111111",
        require: this.props.required,
        error: true
    };

    render() {

        let {selected, fileName, require} = this.state;

        return (
            <div
                className="input_file_wrapper">
                <span>{fileName}</span>
                <div className="btn_select">{selected ? "Выберите файл" : "Выбран"}</div>
                <input type="hidden"/>
            </div>
        )
    }
};
