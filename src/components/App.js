import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
// import QuestionForm from './QuestionForm';

import '../App.css';
import { useState } from 'react/cjs/react.development';

function App() {
  const [cart, updateCart] = useState([]);

  return (
    <div>
      <Banner/>
      <div className="lmj-layout-inner">
        <Cart cart={ cart } updateCart={ updateCart}/>
        <ShoppingList cart={ cart } updateCart={ updateCart }/>
      </div>
      
      {/* <QuestionForm/> */}
    </div>)
}

export default App;
