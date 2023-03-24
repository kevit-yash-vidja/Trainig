import photo from '../Image/add-cart.png'
import { useSelector } from 'react-redux';

const Header = () => {
    const datas = useSelector((state)=>state.counter.value)
  return (
    <div>
      <img className="cart-img" src={photo} />
      <span className="addData">{datas.length}</span>
      <h1 className="header">Welocme To Mobile Shop</h1>
    </div>
  );
};
export default Header