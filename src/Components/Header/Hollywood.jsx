import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Hollywood() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://vikasnodeblogprojectbackend.onrender.com/api/categories/total")
    .then((response) => setData(response.data))
    .catch((error) => console.log("Error", error))
  },[])

  return (
    <div className='p1'>
    <div className='Main'>
      <section className='section1'>
        <h4 > Hollywood</h4>
        <div className='head'></div>
        <div className="allPosts">
          {data.filter((e) => { return e.class === "hollywood1" }).map((item, index) => (
            <div className="latest1" key={index}>
              <Link to={`/details/${item.id}`} state={{ item }} ><img src={item.cover} alt="" /></Link>
              <div>
                <Link to={`/details/${item.id}`} state={{ item }} ><h4>{item.title}</h4></Link>
                <h6>{item.desc.slice(0, 180)}</h6>
                <h6>{item.category} / {item.date}</h6>
              </div>
            </div>
          ))
          }
        </div>
      </section>
      <section className='bollyS2'>
        <h4 > Top Posts</h4>
        <img src="https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450_640.jpg" alt="" className='natureImg' />
        <div className="allTopPosts">
          {data.filter((e) => { return e.class === "hollywood2" }).map((item, index) => (
            <div className="latest2" key={index}>
              <Link to={`/details/${item.id}`} state={{ item }} ><img src={item.cover} alt="" /></Link>
              <div>
                <Link to={`/details/${item.id}`} state={{ item }} ><h4>{item.title}</h4></Link>
                <h6>{item.desc.slice(0, 180)}</h6>
                <h6>{item.category} / {item.date}</h6>
              </div>
            </div>
          ))
          }
        </div>
      

      </section>
    <div className="advertisment">
    <img src="https://i.gifer.com/7Hgc.gif" className='giff' alt='add'></img>
        </div>
    </div>
    </div>
  )
}

export default Hollywood