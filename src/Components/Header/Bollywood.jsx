import React, { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Bollywood() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://vikasnodeblogprojectbackend.onrender.com/api/categories/total")
    .then((response) => setData(response.data))
    .catch((error) => console.log("Error", error))
  },[])

  console.log(data);

  return (
    <div className='p1'>
    <div className='Main'>
      <section className='section1'>
        <h4 > Bollywood</h4>
        <div className="allPosts">
          {data.filter((e) => { return e.class === "Bollywood1" }).map((item, index) => (
            <div className="latest1" key={index}>
              <Link to={`/details/${item.id}`} state={{ item }}><img src={item.cover} alt="" /></Link>
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
       
        <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt=""  className='natureImg'/>
        <div className="allTopPosts">
          {data.filter((e) => { return e.class === "Bollywood2"}).map((item,index)=>(
            <div className="latest2" key={index}>
              <Link to={`/details/${item.id}`} state={{ item }}><img src={item.cover} alt="" /></Link>
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
      <div className="advertisment">
        <img src="https://i.gifer.com/7Hgc.gif" className='giff' alt='add'></img>
    
          <h4 className='ad'>
            
          </h4>
        </div>
    </div>
   
    </div>

    
  )
}

export default Bollywood;