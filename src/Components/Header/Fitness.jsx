import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Fitness() {
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
        <h4 > Fitness</h4>
        <div className='head'></div>
        <div className="allPosts">
          {data.filter((e) => { return e.class === "fitness1" }).map((item, index) => (
            <div className="latest1" key={index}>
              <Link to={`/details/${item.id}`} state={{ item }} ><img src={item.cover} alt="" /></Link>
              <div>
                <Link to={`/details/${item.id}`} state={{ item }}><h4>{item.title}</h4></Link>
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
        <div className='head'></div>
        <img src="https://i.pinimg.com/originals/6e/1c/a6/6e1ca65507cb0293801a8e9a87790a3d.jpg" alt="" className='natureImg' />
        <div className="allTopPosts">
          {data.filter((e) => { return e.class === "fitness2" }).map((item, index) => (
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
        <div className="advertisment">
          <h4>Advertisement</h4>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Fitness;