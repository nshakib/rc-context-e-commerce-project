import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
const Search = ({setSearch}) => {
    return (
      <div className="search-modal">
        <div className="form-field">
          <input autoFocus type="text" placeholder="Search for products" />
          <MdClose onClick={()=> setSearch(false)} className="close-btn" />
        </div>
        <div className="search-result-content">
          <div className="start-msg">
            Start typing to see products you are looking for.
          </div>

          <div className="search-results">
            <div className="search-result-item">
              <div className="image-container">
                <img src={prod} alt="" />
              </div>
              <div className="prod-details">
                <span className="name">Product name</span>
                <span className="desc">Product description</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Search;
