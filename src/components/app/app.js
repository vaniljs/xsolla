import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./app.sass";
import Input from "../input";
import Inputfile from "../input-file";

export default class App extends Component {
    render() {
        return (
            <div className="form_wrapper">
                <form>
                    <div className="row">
                        <div>
                            <p className="label_input">Электронная почта*</p>
                            <Input required placehold="yourname@example.com"/>
                            <p className="label_input">Телефон*</p>
                            <Input required/>
                            <p className="label_input">Резюме*</p>
                            <Inputfile required/>
                        </div>
                        <div>
                            <p className="label_input">Имя</p>
                            <Input placehold="Джон"/>
                            <p className="label_input">Фамилия</p>
                            <Input placehold="Смит"/>
                            <p className="label_input">Отчество</p>
                            <Input/>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <span>Отправляя форму, вы даете согласие на обработку <a href="//иксолла.рф/privacypolicy/" target="_blank">персональных данных</a></span>
                        </div>
                        <div>
                            <button className="btn_send">Отправить резюме</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}