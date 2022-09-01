import React from "react";
import classes from "./NewsData.module.css";
import noImg from "./noImage.jpg";

const NewsData = (props) => {
  return (
    <li className={classes.news}>
      <div className={classes.data}>
        <h2>{props.title}</h2>
        {/* <div> {props.url}</div> */}
        <p className={classes.desc}>{props.description}</p>
        <h6>{props.author}  {props.publishedAt}</h6>
      </div>
      <div className={classes.imgBox}>
        <img className={classes.img} src={props.image} alt = {noImg}/>
      </div>
    </li>
  );
};
export default NewsData;
