import React from "react";

const Contacts = ({ blogs }) => {
  return (
    <div>
      <center>
        <h1>Blogs List</h1>
      </center>
      <div></div>
      {blogs.map((blog) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {blog.username} | {blog.date.substring(0, 10)}
            </h6>
            <p className="card-text">{blog.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
