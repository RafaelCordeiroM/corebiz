import React from 'react';
import './Form.css';

const Form = () => {

    return (
        <section id="section-form">
            <div className="container">
                <div className="row">
                    <div className="col-title">
                        <span>
                        Participe de nossas news com promoções e novidades!
                        </span>
                    </div>
                        <form action="">
                    <div className="row row-form">
                            <div className="col-input">
                                <input type="text" placeholder="Digite seu nome" name="name" />
                            </div>
                            <div className="col-input">
                                <input type="email" placeholder="Digite seu email" name="email" />
                            </div>
                            <div className="col-btn">
                                <button>
                                    Eu quero!
                                </button>
                            </div>
                    </div>
                        </form>
                </div>
            </div>
        </section>
    )
}

export default Form;