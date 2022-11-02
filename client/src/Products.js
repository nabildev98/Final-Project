import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Product(props) {
    const [products, setProducts] = useState([])
    useEffect(() => {

        axios.get('http://localhost:8080/allProducts')
        .then(response =>{
        console.log(response.data)
        setProducts(response.data)
        })
        },[])
    return (
        <div className="mainContainerElement">
             <div className="navbar">
                        <div className="logo">
                            <span className="logoName">LITE CART</span>
                            <img className="logoImage" src="https://media.istockphoto.com/vectors/vegetables-on-shopping-cart-trolley-grocery-logo-icon-design-vector-vector-id1205419959?k=20&m=1205419959&s=612x612&w=0&h=F4gyp5wuFkCaZr00OQS8KPCSE1_4pHmFiOIM2TQlOPI=" />
                        </div>
                        <nav className="navlistItems">
                        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stores">Stores</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          
          <li>
            <Link to="/main">Main</Link>
          </li>
          <li>
            <Link to="/cart"><img className="cartIcon" alt="Image cart" src="https://img.icons8.com/parakeet/2x/shopping-cart.png"></img></Link>
          </li>
          <li>
            <Link to="/summary">Summary Cart</Link>
          </li>
        </ul>
                         
                        </nav>
                    </div>
                    
<div className="eachrow">  

{ products && products.map((product) => (

<div className="outlineBox">
<div className="outerTopProduCtontainer">
    <div className="toptopheaderName">
        <div className="topheaderName">
            Featured Products
        </div>
    </div>
    <div className="chocalteImage">
        <img src={product.product_url} />
    </div>
    <hr></hr>
    <div className="ProductInforamtion">
        {product.product_name}
    </div>

    <div className="saleImage">
        <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" /><h4 className="saleDescription">SALE</h4>
    </div>
    <hr></hr>
    <div className="caloriesDescription">
    {product.product_description}
    </div>
    <div className="priceInformation">
        <span className="firstPrice">{product.price}</span> <span className="secoundPrice">          {product.sale_price}</span>
    </div>
    <div className="addContent"> <h3>Add</h3>
    </div>
</div>
</div> 

))
 

}
                        {/* <div className= "othercolumn">
            <img src="https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_141ca85a-53fa-4fb2-96bc-e11b8f2ced1c.png" />
        </div> */}

{/* 
                         <div className="outlineBox">
                            <div className="outerTopProduCtontainer">
                                <div className="toptopheaderName">
                                    <div className="topheaderName">
                                        Featured Products
                                    </div>
                                </div>
                                <div className="chocalteImage">
                                    <img src="https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/e705341e-c803-4794-83f1-f30ccc6b9629/300x300.jpg" />
                                </div>
                                <hr></hr>
                                <div className="ProductInforamtion">
                                    Cheerios Honey Nut Cereal 430 g
                                </div>

                                <div className="saleImage">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" /><h4 className="saleDescription">SALE</h4>
                                </div>
                                <hr></hr>
                                <div className="caloriesDescription">
                                    430g($1.04 per 100g)
                                </div>
                                <div className="priceInformation">
                                    <span className="firstPrice">$4.49</span> <span className="secoundPrice">          $6.49</span>
                                </div>
                                <div className="addContent"> <h3>Add</h3>
                                </div>
                            </div>
                        </div>  */}





{/* 

                     <div className="outlineBox">
                            <div className="outerTopProduCtontainer">
                                <div className="toptopheaderName">
                                    <div className="topheaderName">
                                        Featured Products
                                    </div>
                                </div>
                                <div className="chocalteImage">
                                    <img src="https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/96c1ec03-cef1-4824-8b61-32fcd55a03e8/300x300.jpg" />
                                </div>
                                <hr></hr>
                                <div className="ProductInforamtion">
                                    Liberté Mediterranee Yogurt Blackberry 500 g

                                </div>

                                <div className="saleImage">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" /><h4 className="saleDescription">SALE</h4>
                                </div>
                                <hr></hr>
                                <div className="caloriesDescription">
                                    500g($0.80 per 100g)
                                </div>
                                <div className="priceInformation">
                                    <span className="firstPrice">$4.49</span> <span className="secoundPrice">          $6.49</span>
                                </div>
                                <div className="addContent"> <h3>Add</h3>
                                </div>
                            </div>
                        </div> */}





            </div>

        </div>
        

    );
}

export default Product;