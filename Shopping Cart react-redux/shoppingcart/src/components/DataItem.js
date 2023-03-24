import './DataItem.css'
import photo from '../Image/add-cart.png'
import Header from './Headaer'
import { addValueHandler } from './DataItemSlice'
import {  useDispatch } from 'react-redux'
import CartData from './cartData'
import { useState } from 'react'
const DataItem = ()=>{
    const[search,setSearch]=useState("")
    const[hide,setHide]=useState(false)
    const[datahide, setdataHide]=useState(true)
    const[loading , setLoading]=useState(false)
    const dispatch = useDispatch()
    const data = [
        {
          id: 1,
          title: "Samsung Galaxy S7",
          price: 700.0,
          img: "https://res.cloudinary.com/drecbsopp/image/upload/v1627398399/samasung-galaxy-a51-8gb-8uh_tndbgv.jpg",
          quantity: 1,
        },
        {
          id: 2,
          title: "Moto G5 Plus",
          price: 600.0,
          img: "https://res.cloudinary.com/drecbsopp/image/upload/v1627398477/MotoGPowerDual_2021_Reformatted_1_330x_wp8gve.png",
          quantity: 1,
        },
        {
          id: 3,
          title: "Xiaomi Redmi Note 2",
          price: 500.0,
          img: "https://res.cloudinary.com/drecbsopp/image/upload/v1627398543/D7A7DA95-AEF8-228B-A2D2-A3FEBF237C33_y9p6wq.png",
          quantity: 1,
        },
        {
          id: 4,
          title: "Nokia G20",
          price: 400.0,
          img: "https://res.cloudinary.com/drecbsopp/image/upload/v1627398698/nokia3_resize_md_qdw7bv.jpg",
          quantity: 1,
        },
        {
          id: 5,
          title: "Apple i phone",
          price: 4000.0,
          img: "https://www.91-img.com/gallery_images_uploads/3/d/3df5ca6a9b470f715b085991144a5b76e70da975.JPG?tr=h-550,w-0,c-at_max",
          quantity: 1,
        },
        {
            id: 6,
            title : "redmi note 6",
            price: 200.0,
            img : "https://tse3.mm.bing.net/th?id=OIP.UxJYIZhrr6WfaB1zvIJd2QHaHa&pid=Api&P=0",
            quantity : 1 
        },
        {
            id: 7,
            title : "Oppo F11",
            price: 300.0,
            img : "https://tse4.mm.bing.net/th?id=OIP.5YLyPzAKz9VA537lbv-orAHaHa&pid=Api&P=0",
            quantity : 1 ,
        },
        {
            id: 8,
            title : "Apple Iphone 12",
            price: 300.0,
            img : "https://tse2.mm.bing.net/th?id=OIP.5DK2O965q0C6MdT8Vz45-wHaHa&pid=Api&P=0",
            quantity : 1 ,
        },
        {
            id: 9,
            title : "Oppo F11",
            price: 300.0,
            img : "https://tse4.mm.bing.net/th?id=OIP.5YLyPzAKz9VA537lbv-orAHaHa&pid=Api&P=0",
            quantity : 1 ,
        },
        {
            id: 10,
            title : "Oppo F11",
            price: 300.0,
            img : "https://tse4.mm.bing.net/th?id=OIP.5YLyPzAKz9VA537lbv-orAHaHa&pid=Api&P=0",
            quantity : 1 ,
        },
        {
            id: 11,
            title : "Oppo F11",
            price: 300.0,
            img : "https://tse4.mm.bing.net/th?id=OIP.5YLyPzAKz9VA537lbv-orAHaHa&pid=Api&P=0",
            quantity : 1 ,
        },
        {
            id: 12,
            title : "Oppo F11",
            price: 300.0,
            img : "https://tse4.mm.bing.net/th?id=OIP.5YLyPzAKz9VA537lbv-orAHaHa&pid=Api&P=0",
            quantity : 1 ,
        }
        
      ];
       const filterData = data.filter((item)=>{
         return
       })
       let timer;
      return (
        <div>
                
          <Header/> 
          <div className='input'><input type="search" placeholder='search'  onChange={(event)=>{
            clearTimeout(timer)
             timer = setTimeout(() => {
                setLoading(true)
                setSearch(event.target.value)
                
              }, 1000);
              setLoading(false)
          }}/>
          </div>
          <img  className="cart-img" src={photo} onClick={()=>{
            setHide(!hide)
            setdataHide(!datahide)
          }} />
          {loading && "loading..."}
         {hide &&<CartData/>}   
       {datahide && <div className = "item">
            {data.filter((item)=>{
                return(
                    item.title.toLowerCase().includes(search)
                )
            }).map((item)=>(
                <div className="data-item" key={item.id}>
                <img className="img" src={item.img}/>
                <h1>{item.title}</h1>
                <p>${item.price}</p>
               <button onClick={()=>{
                
                 dispatch(addValueHandler(item))
                 
               }}>Add to cart</button> 
                </div>
            ))}
        </div>}
        </div>
      )
}
  export default DataItem;