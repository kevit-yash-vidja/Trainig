import React, { useState, useEffect, useRef, useMemo } from "react";
import classes from "./Fetchdata.module.css";
import img from "./image/Iphone-spinner-2.gif"

const Fetchdata = () => {
  const [data, setdata] = useState([]);
  const [serch, setSerch] = useState("");
  const [loading, setIsloading] = useState(false);
  const[datahide , setDataHide] = useState(true);
  const[error , setError] = useState(false)

  useEffect(() => {
    const apiData = () => {
      setIsloading(true);
      fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
        res.json().then((data) => {
          setdata(data);
          setIsloading(false);
          console.log(data);
        });
      });
    };
    apiData();
  }, []);

  let timer = useRef();
  const changeHandler = (event) => {

    if(!data.includes(serch)){
      // console.log(serch)
      setError(true)
      
      
    }else if(data.includes(serch)){
      setError(false)
      
    } 
    setIsloading(true);
    setDataHide(false)
    if(timer.current) clearTimeout(timer.current)
   timer.current = setTimeout(() => {
  
      setSerch(event.target.value);
      console.log(event.target.value)
      console.count()
      setIsloading(false)
      setDataHide(true)
    }, 2000);
   
  };

  const filterData = useMemo(()=>{
      return data.filter((item)=>(
        item.name.toLowerCase().includes(serch) ||
        item.username.toLowerCase().includes(serch) ||
        item.email.toLowerCase().includes(serch)
      ));
  },[data,serch])
   

  return (
    <div>
      <div className={classes.serch}>
        <input
          className={classes.serchInput}
          type="search"
          placeholder="search"
          onChange={changeHandler}
        />
      </div>
      
     { datahide && <div className={classes.table}>
        <table className={classes["table-data"]}>
          <thead>
            <tr className={classes.head}>
              <th>name</th>
              <th>username</th>
              <th>Email</th>
              <th>Mobile No.</th>
            </tr>
            {filterData.length === 0  && <p className={classes.error}>no data is found</p>}
          </thead>
          
          {filterData
            .map((item) => (
              <tbody key={item.id}>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
                
              </tbody>
            ))}
        </table> 
        
        
      </div> }
    
      {loading && (
        <img className={classes.loader} src={img} />
      )}
    </div>
  );
};
export default Fetchdata;
