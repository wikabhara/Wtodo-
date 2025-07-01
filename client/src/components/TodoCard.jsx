import React from "react";

export default function TodoCard({ title, task, status }) {
  return (
    <div className="card card-dash bg-base-100 w-80">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{task}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{status}</button>
        </div>
      </div>
    </div>
  );
}
