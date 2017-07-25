import { ADD_ITEM, REMOVE_ITEM, ADD_TO_CART, SELECTED_PRODUCTID } from '../actions/cart';

const initialState = {
  "Products": [
    {
      "GroceryID": "1",
      "GroceryName": "Cabbage",
      "GroceryCategory": "Vegetable",
      "GroceryActualPrice": "2.05",
      "GroceryPreviousPrice": "2.50",
      "GroceryImage": "https://www.organicfacts.net/wp-content/uploads/2013/12/redcabbage.jpg",
      "GroceryWeight": "2 Kg"
    },
    {
      "GroceryID": "2",
      "GroceryName": "Carrot",
      "GroceryCategory": "Vegetable",
      "GroceryActualPrice": "1.75",
      "GroceryPreviousPrice": "1.90",
      "GroceryImage": "http://goorganicnyc.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/carrot.jpg",
      "GroceryWeight": "3 Kg"
    },
    {
      "GroceryID": "3",
      "GroceryName": "Maize",
      "GroceryCategory": "Grain",
      "GroceryActualPrice": "8.30",
      "GroceryPreviousPrice": "10.50",
      "GroceryImage": "https://southernafrican.news/wp-content/uploads/2015/11/yellow-maize-1169337.jpg",
      "GroceryWeight": "4 Kg"
    },
    {
      "GroceryID": "4",
      "GroceryName": "Onion",
      "GroceryCategory": "Vegetable",
      "GroceryActualPrice": "4.00",
      "GroceryPreviousPrice": "5.50",
      "GroceryImage": "http://48qbc13dv397vzass1iql2a1.wpengine.netdna-cdn.com/wp-content/uploads/2011/10/Onion-300x200.jpg",
      "GroceryWeight": "6 Kg"
    },
    {
      "GroceryID": "5",
      "GroceryName": "Pineapple",
      "GroceryCategory": "Fruit",
      "GroceryActualPrice": "10.55",
      "GroceryPreviousPrice": "11.30",
      "GroceryImage": "http://cdn1.medicalnewstoday.com/content/images/articles/276/276903/pineapple.jpg",
      "GroceryWeight": "2 Piece"
    },
    {
      "GroceryID": "6",
      "GroceryName": "Tomato",
      "GroceryCategory": "Vegetable",
      "GroceryActualPrice": "4.50",
      "GroceryPreviousPrice": "5.20",
      "GroceryImage": "https://www.organicfacts.net/wp-content/uploads/2013/05/Organictomato1-700x525.jpg",
      "GroceryWeight": "2 Kg"
    }
  ],
  "items": 1,
  "Cart": [],
  "selectedProduct": 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: state.items + 1 || 0};
    case REMOVE_ITEM: 
      return { ...state, items: state.items - 1 || 0};
    case ADD_TO_CART: 
      return {
        ...state,
        Cart: state.Cart.concat({ "GroceryID": action.id, "Quantity": state.items})
      };
    case SELECTED_PRODUCTID:
      return {
        ...state,
        selectedProduct: action.id || 0
      }
    default: 
      return state;
  }
}