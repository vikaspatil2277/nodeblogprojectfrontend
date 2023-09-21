import React, { useEffect, useState } from 'react'
import { NavLink, useLocation
} from 'react-router-dom';
import "./Details.css"
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import axios from 'axios';



function Details() {

  const value = useLocation().state
  //console.log(value)
  const [data, setData] = useState([]);
  
  useEffect(() => {
   
       axios.get("https://vikasnodeblogprojectbackend.onrender.com/api/categories/detailDesc")
       .then((res)=>setData(res.data))
    },[])
 
  return (
    <div>
      
      <section className='singlePost'>
        <div className="container">
          <div className="right">
            <h1 className='detailsHead'>{value.item.title}</h1>
            <div className="profile">
              <img src="https://imgs.search.brave.com/fheKHA24ms7oYoRYaBxDV2piKTh8oQQc-2qtESQYCI0/rs:fit:800:930:1/g:ce/aHR0cHM6Ly9wNy5o/aWNsaXBhcnQuY29t/L3ByZXZpZXcvNy82/MTgvNTA1L2F2YXRh/ci1pY29uLWZhc2hp/b24tbWVuLXZlY3Rv/ci1hdmF0YXIuanBn" alt="" className='profileimg' />

              <div>
                <h5>vikas patil</h5>
                <h6>jun 22, 2023</h6>
              </div>
              <div className="icons">
                <FaFacebook className='icon' />
                <AiOutlineTwitter className='icon' />
                <GrInstagram className='icon' />
                <BsYoutube className='icon' />
              </div>

            </div>
            <img src={value.item.cover} alt="" className='detailsImg' />
            <h5 className='detailsDesc'>{value.item.desc}</h5>
            <div className='like'>
              <AiTwotoneLike className='likeicon' />
              <h4>Like</h4>
              <BiShareAlt className='shareIcon' />
              <h4>Share</h4>
            </div>
            <hr />
            <div className='Writter'>
              <img src="https://imgs.search.brave.com/fheKHA24ms7oYoRYaBxDV2piKTh8oQQc-2qtESQYCI0/rs:fit:800:930:1/g:ce/aHR0cHM6Ly9wNy5o/aWNsaXBhcnQuY29t/L3ByZXZpZXcvNy82/MTgvNTA1L2F2YXRh/ci1pY29uLWZhc2hp/b24tbWVuLXZlY3Rv/ci1hdmF0YXIuanBn" alt="" className='profileimg' />
              <div >
                <h6>Written By</h6>
                <h5>vikas patil</h5>
                <h6>July 26 2023</h6>
              </div>
            </div>
            <hr />
           <div> <button className='backbtn'><NavLink to="/">back</NavLink></button></div>
          </div>
          <div className='totalfooter'>
            {data.map((item, index) => (
              <div className="detailDesc" key={index}>
                <Link to={`/details/${item.id}`} state={{ item }}
                  key={index}> <img src={item.cover} alt="" /></Link>
                <Link to={`/details/${item.id}`} state={{ item }}
                  key={index}><h4>{item.title}</h4></Link>
                <div className='footer2'>
                  <img src="https://imgs.search.brave.com/fheKHA24ms7oYoRYaBxDV2piKTh8oQQc-2qtESQYCI0/rs:fit:800:930:1/g:ce/aHR0cHM6Ly9wNy5o/aWNsaXBhcnQuY29t/L3ByZXZpZXcvNy82/MTgvNTA1L2F2YXRh/ci1pY29uLWZhc2hp/b24tbWVuLXZlY3Rv/ci1hdmF0YXIuanBn" alt="" className='profileimg' />
                  <div>
                    <h5>vikas patil</h5>
                    <h7>june 22, 2023</h7>
                  </div>
                </div>

              </div>
            ))}
          </div>
     
        </div>
      </section>
      
    </div>
  )
}

export default Details;