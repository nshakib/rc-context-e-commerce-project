import React, { useEffect, useState } from 'react'
import "./Header.scss";

 import { TbSearch } from "react-icons/tb";
 import { AiOutlineHeart } from "react-icons/ai";
 import { CgShoppingCart} from "react-icons/cg";
import Cart from '../Cart/Cart';
import Search from './Search/Search';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setSearch] = useState(false);
     const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
      <>
        <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
          <div className="header-content">
            <ul className="left">
              <li onClick={() => navigate('/')}>Home</li>
              <li>About</li>
              <li>Categories</li>
            </ul>
            <div className="center" onClick={() => navigate('/')}>Simple Store</div>
            <div className="right">
              <TbSearch onClick={()=>setSearch(true)} />
              <AiOutlineHeart />
              <span className="cart-icon" 
              onClick={()=>setShowCart(true)}>
                <CgShoppingCart />
                
              </span>
            </div>
          </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart} />}
        {showSearch && <Search setSearch={setSearch} />}
      </>
    );
};

export default Header;
