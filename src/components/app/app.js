import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./app.sass";
import Input from "../input";
import Inputfile from "../input-file";

export default class App extends Component {

    state = {
        error: false,
        sending: false,
        sended: false
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            sending: true
        });
        fetch("http://qeru.ru/xsolla/send.php", {
            method: "POST",
            body: new FormData(document.forms.sendform)
        }).then( (res) => {
            if (res.ok) {
                this.setState({
                    sending: false,
                    sended: true
                })
            } else if (res.status === 401) {
                console.log("Oops! ");
            }
        }, function (e) {
            console.log("Error submitting form!");
        });

    };

    render() {

        let {error, sending, sended} = this.state;

        return (
            <div className="form_wrapper">
                <form
                    id="sendform"
                    encType="multipart/form-data"
                    method="POST">
                    <div className="row">
                        <div>
                            <p className="label_input">Кому отправить?*</p>
                            <Input required name="email" placehold="yourname@example.com"/>
                            <p className="label_input">Телефон*</p>
                            <Input name="phone" val="12345" required/>
                            <p className="label_input">Резюме*</p>
                            <Inputfile required/>
                        </div>
                        <div>
                            <p className="label_input">Имя</p>
                            <Input name="name" placehold="Джон" val="Джон"/>
                            <p className="label_input">Фамилия</p>
                            <Input name="surname" placehold="Смит" val="Конор"/>
                            <p className="label_input">Отчество</p>
                            <Input name="midlname" val="Александрович"/>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <span>Отправляя форму, вы даете согласие на обработку <a href="//иксолла.рф/privacypolicy/"
                                                                                     target="_blank">персональных данных</a></span>
                        </div>
                        <div>
                            {!sended && !sending ? <button className="btn_send" onClick={this.handleSubmit}>Отправить
                                резюме</button> : false}
                            {sending ? <img className="img-loader" src="./img/bars.svg" alt="" width="50px"/> : false}
                            {sended ? <p className="success">Отправлено!</p> : false}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}