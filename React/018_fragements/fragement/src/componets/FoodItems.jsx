import PropTypes from "prop-types";

import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ Items }) => {

  let [activeItems,setActiveItems]=useState([])
  
  const onBuyClick=(item,event)=>{
    let newItems=[...activeItems,item];
    setActiveItems(newItems)

  }

  return (
    <ul className="list-group">
      {Items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyClicked={(event) => onBuyClick(item,event)}
        />
      ))}
    </ul>
  );
};

FoodItems.propTypes = {
  Items: PropTypes.oneOfType([
    PropTypes.string, // Allow string content
    PropTypes.object,
    PropTypes.array, // Allow object content
  ]).isRequired, // Mark prop as required
};
export default FoodItems;

// import  { useState } from 'react';
// import PropTypes from 'prop-types';
// import Item from './Item';

// const FoodItems = ({ items }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredItems = items.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Search food items..."
//         value={searchTerm}
//         onChange={(event) => setSearchTerm(event.target.value)}
//       />
//       <ul className="list-group">
//         {filteredItems.map((item) => (
//           <Item key={item.id} foodItem={item} /> // Assuming 'id' is unique
//         ))}
//       </ul>
//     </>
//   );
// };

// FoodItems.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired, // Ensure unique identifier
//       name: PropTypes.string.isRequired,
//       // Add other properties for food items
//     })
//   ).isRequired,
// };

// export default FoodItems;
