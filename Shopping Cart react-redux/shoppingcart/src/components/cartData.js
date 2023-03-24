import { useSelector } from "react-redux";
import './cartData.css'

const CartData = ()=>{
    const data = useSelector((state)=>state.counter.value)

    return(
        <div className="cart">
        {data.map((item)=>(
            <div className="cart-item">
            <img src={item.img}/>
            <h1 className="title">{item.title}</h1>
            <p className="price">${item.price}</p>

        </div>
        ))}
        </div>
    )
}

export default CartData