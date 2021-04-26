import { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import API from "../../utils/API";
import { Button } from 'rebass'
import './style.css'
import CartContext from "../../utils/CartContext";

const ProductPage = ({ user }) => {
    const cart = useContext(CartContext);

    const [item, setItem] = useState({});
    const productNum = window.location.pathname;
    // const productId = parseInt(productNum.replace("/products/", ""));
    const history = useHistory();
    const { ItemId } = useParams();

    useEffect(() => {
        API.getOneItem(ItemId)
            .then(thing =>
                setItem(thing.data))
    }, [ItemId])

    
    return (
        <>
            <div className="container">
                <div className="title">{item.product_name}</div>
                <div className="grid">
                    <img src={item.image_link} className="image" alt="Product"></img>
                    <div className="row">
                        <div className="info">
                            <div className="price">Price:{' '}{item.fake_price}</div>
                            <div>Stock:{' '}{item.fake_quantity} </div>
                            <div>Sold:{' '}{item.fake_sold} </div>
                        </div>
                    </div>
                    <div className="description">{item.fun_description}</div>
                    <div className="row">
                        <div className="btns">
                            <Button onClick={() => cart.addItem(item)}>Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductPage;