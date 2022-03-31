import axios, { Axios } from 'axios';
import React, { useEffect, useState } from "react";
import "../App.css";

function PostForm() {
    const url = "http://127.0.0.1:8000/inputBlog/";
    const [data, setData] = useState({
        title: "",
        username: "",
        body: ""
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            title: data.title,
            username: data.username,
            body: data.body
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
  return (
    <div id="formContainer">
      <form onSubmit={(e) => submit(e)} id="form">
        <div id="blogContents">
          <h3 id="heading">Blog Form </h3>

          <div id="first">
            <label class="form-label">Blog Title</label>
            <input
              className="form-control"
              onChange={(e) => handle(e)}
              value={data.title}
              id="title"
              type="text"
            ></input>
          </div>

          <div id="second">
            <label class="form-label">Username</label>
            <input
              className="form-control"
              onChange={(e) => handle(e)}
              value={data.username}
              id="username"
              text="text"
            ></input>
          </div>

          <div id="third">
            <label class="form-label">Blog</label>
            <textarea
              className="form-control"
              onChange={(e) => handle(e)}
              value={data.body}
              rows="4"
              cols="50"
              placeholder=" Enter text here..."
              maxLength={200}
              id="body"
            ></textarea>
          </div>
          <div id="btnSubmit">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostForm