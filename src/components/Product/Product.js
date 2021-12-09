import React from "react";
import './Product.css';

const Product = ({iten}) => {
    const {stars,productName,imageUrl,listPrice,price,installments} = iten
    console.log(iten)
    let starsArray = [false,false,false,false,false];
    for (let i = 0; i < stars; i++) {
        starsArray[i] = true;
    }
    return (
        <div className="product">
            {/* top */}
            <div className="top">
                <img src={imageUrl} alt="" />
                <div className="off">
                    <span>OFF</span>
                </div>
            </div>
            {/* middle */}
            <div className="middle">
                {/* NAME */}
                <div className="name">
                    <span>{productName}</span>
                </div>
                {/* STARS */}
                <div className="stars">
                {starsArray.map(star => {
                    return star ? (
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z" fill="#F8475F"/>
                            </svg>
                            ):(
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3896 4.4595L7.29501 4.13318L5.69478 0.648972L4.09454 4.13845L0 4.4595L3.10935 6.94897L2.17541 10.649L5.69478 8.68581L9.21415 10.649L8.2859 6.94897L11.3896 4.4595ZM5.69477 7.70161L3.55353 8.89634L4.12301 6.64371L2.23234 5.12792L4.72666 4.92792L5.69477 2.80687L6.66857 4.93319L9.16289 5.13319L7.27222 6.64897L7.8417 8.90161L5.69477 7.70161Z" fill="#F8475F"/>
                            </svg>
                            );
                })}
                </div>
                {/* PRICES */}
                <div className="prices">
                    <div className="sub-price">
                        {listPrice? <span>de R$ {(Math.round(listPrice) / 100).toFixed(2)}</span>:''}
                        </div>
                    <div className="price">
                        por R$ {(Math.round(price) / 100).toFixed(2)}
                        </div>
                </div>
                {/* INSTALLMENTS */}
                <div className="installments">
                    {installments.length > 0?
                    <span>
                        ou em {installments[0].quantity}x de R$ {(Math.round(installments[0].value) / 100).toFixed(2)}
                    </span>
                    : ''
                    }
                </div>
            </div>
            <div className="bottom">
                <button>
                    COMPRAR
                </button>
            </div>
        </div>
    )
}

export default Product;