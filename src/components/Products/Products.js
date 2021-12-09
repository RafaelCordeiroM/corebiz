import React from "react";
import Slider from "react-slick";
import Product from "../Product/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Products.css';
import {useEffect} from "react";
import { render } from "@testing-library/react";



  
  export default class ProductsSlider extends React.Component {
    state = {
      loading: true,
      itens: null
    };
  
    async componentDidMount() {
      const url = "https://corebiz-test.herokuapp.com/api/v1/products";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ itens: data, loading: false });
    }

    
    render(){
      var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true
      };
      return (
        <section id="section-products">
        { this.state.loading ? <div>Loading...</div>: 

        <Slider {...settings}>
          {this.state.itens.map(iten => (
            <Product 
            iten={iten}
            key={iten.id}
              />
          ))}
        </Slider>}
       
      </section>
      );  
      }
}