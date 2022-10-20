import { useState, useEffect } from 'react';
import { unpopulateCart, setItem } from '../../store/cart';
import { useDispatch } from 'react-redux';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItem(item.id,count));
  }, [count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange = {(e)=>{
            setCount(e.target.value);
            // dispatch(setItem(item.id,e.target.value))
          }}
        />
        <button
          className="cart-item-button"
          onClick={()=>setCount(count+1)}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={()=>setCount(count-1)}
        >
          -
        </button>
        <button
          className="cart-item-button" onClick={()=>dispatch(unpopulateCart(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
