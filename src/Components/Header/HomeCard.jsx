import React, { useEffect, useState } from "react";
import { AiOutlineTags } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const HomeCard = () => {
  const [home, sethome] = useState([]);
  const [blog, setBlog] = useState([]);
  const [latestArticle, setLatestArticle] = useState([]);
  const [topPosts, setTopPosts] = useState([]);
  const [latestStories, setLatestStories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const main = await axios(
        `https://vikasnodeblogprojectbackend.onrender.com/api/categories/data`
      );
      const blog = await axios(
        `https://vikasnodeblogprojectbackend.onrender.com/api/categories/blog`
      );
      const latestArticle = await axios(
        `https://vikasnodeblogprojectbackend.onrender.com/api/categories/latestArticle`
      );
      const topPosts = await axios(
        `https://vikasnodeblogprojectbackend.onrender.com/api/categories/topPosts`
      );
      const latestStories = await axios(
        `https://vikasnodeblogprojectbackend.onrender.com/api/categories/latestStories`
      );

      sethome(main.data);
      setBlog(blog.data);
      setLatestArticle(latestArticle.data);
      setTopPosts(topPosts.data);
      setLatestStories(latestStories.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <hr />
      <div className="mainblog">
        <section className="blog1">
          <div>
            {home
              .filter((data) => {
                return data.category === "Technology";
              })
              .map((item, index) => (
                <div key={index}>
                  <div className="homeimg1">
                    <Link to={"/technology"} state={{ item }}>
                      <img src={item.cover} alt="" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>

        <div className="mainblog2">
          <section className="blog2">
            <div>
              {home
                .filter((data) => {
                  return data.category === "Bollywood";
                })
                .map((item, index) => (
                  <div key={index}>
                    <div className="homeimg2">
                      <Link to={"/bollywood"} state={{ item }}>
                        <img src={item.cover} alt="" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          <section className="blog3">
            <div>
              {home
                .filter((data) => {
                  return data.category === "Hollywood";
                })
                .map((item, index) => (
                  <div key={index}>
                    <div className="homeimg3">
                      <Link to={"/hollywood"} state={{ item }}>
                        <img src={item.cover} alt="" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>

      <div className="latestblog">
        <div className="blog">
          <h2>The Latest</h2>
          <div className="head"></div>
          <div className="container grid3">
            {blog.map((item, index) => (
              <div className=" boxItem" key={index}>
                <div className="img">
                  <Link to={`/details/${item.id}`} state={{ item }}>
                    <img src={item.cover} alt="" />
                  </Link>
                </div>
                <div className="details">
                  <div className="tag">
                    <AiOutlineTags className="icon" />
                    <a href="/">#{item.category}</a>
                  </div>
                  <Link
                    to={`/details/${item.id}`}
                    className="link"
                    state={{ item }}
                  >
                    <h4>{item.title}</h4>
                  </Link>
                  <p className="description">{item.desc.slice(0, 180)}...</p>
                  <div className="date">
                    <AiOutlineClockCircle className="icon" />
                    <label htmlFor="">{item.date}</label>
                    <AiOutlineComment className="icon" />{" "}
                    <label htmlFor="">27</label>
                    <AiOutlineShareAlt className="icon" />{" "}
                    <label htmlFor="">SHARE</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="articles">
          <h4> Latest Articles</h4>
          <div className="head"></div>
          <div className="section2">
            <div className="grid1">
              {latestArticle.map((item, index) => (
                <div className="article" key={index}>
                  <Link to={`/details/${item.id}`} state={{ item }}>
                    <img src={item.cover} alt="" />
                  </Link>
                  <div className="date">
                    <Link to={`/details/${item.id}`} state={{ item }}>
                      <h4>{item.title}</h4>
                    </Link>
                    <h6>{item.desc}</h6>
                    {item.category} /{item.date}
                  </div>
                </div>
              ))}
            </div>
            <div className="advertisement">
              <h2 className="ad">Advertisement</h2>
            </div>
            <div className="randomImage">
              <img
                src="https://www.freewalldownload.com/lake-wallpaper/lake-attractive-rivers-wallpaper-free-download.jpg"
                alt=""
              />
              
            </div>
            <div className="topPosts">
              <h4> Top Posts</h4>
              <div className="head"></div>
              <img
                src="https://cdn.pixabay.com/photo/2021/06/01/16/15/island-6302137_640.jpg"
                alt=""
              />
              {topPosts.map((item, index) => (
                <div className="topPost" key={index}>
                  <Link to={`/details/${item.id}`} state={{ item }}>
                    <img src={item.cover} alt="" />
                  </Link>
                  <div>
                    <Link to={`/details/${item.id}`} state={{ item }}>
                      <h2>{item.title}</h2>
                    </Link>
                    <h6>
                      {item.category}/{item.date}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section3">
          <h4> latest Stories</h4>
          <div className="head"></div>
          <div className="Stories">
            {latestStories.map((item, index) => (
              <div className="sPost" key={index}>
                <h2>{item.title}</h2>
                <h6>{item.desc}</h6>
                <h6>{item.date}</h6>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeCard;
