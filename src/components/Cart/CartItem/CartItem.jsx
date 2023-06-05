import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {

  const {cartItems,  handleAddToCart,  handleRemoveToCart, handleCartProductCartQuantity} = useContext(Context)
  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item.id} className="search-result-item">
          <div className="image-container">
            {/* <img src={prod} alt="" /> */}
            <img src={process.env.REACT_APP_DEV_URL +  item.attributes.img?.data?.[0]?.attributes.url} alt="" />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            <MdClose className="close-btn" onClick={() => handleRemoveToCart(item)}/>
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductCartQuantity('dec', item)}>-</span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductCartQuantity('inc', item)}>+</span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                <span>&#2547; {item.attributes.price * item.attributes.quantity}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
