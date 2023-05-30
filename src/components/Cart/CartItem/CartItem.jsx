import { MdClose } from "react-icons/md";
import "./CartItem.scss";
const CartItem = () => {
    return (
        <div className="cart-products">
            <div
                    className="search-result-item"
                    
                >
                    <div className="image-container">
                        <img
                            src="" alt=""
                        />
                    </div>
                    <div className="prod-details">
                        <span className="name"></span>
                        <MdClose
                        
                            className="close-btn"
                           
                        />
                        <div className="quantity-buttons">
                            <span
                                
                            >
                                -
                            </span>
                            <span></span>
                            <span
                                
                            >
                                +
                            </span>
                        </div>
                        <div className="text">
                            <span></span>
                            <span>x</span>
                            <span className="highlight">
                                <span></span>
                                
                            </span>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default CartItem;
