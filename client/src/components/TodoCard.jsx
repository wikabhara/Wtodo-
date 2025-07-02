import React from "react";
import TrashIconPng from "../assets/img/delete.png";

export default function TodoCard({ title, task, status, onDelete }) {
  return (
    <div className="card card-dash bg-base-100 w-80">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{task}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-primary">{status}</button>
          <button className="btn btn-sm btn-soft btn-accent">Edit</button>
          <button onClick={onDelete} className="btn btn-sm btn-soft btn-error">
            <img src={TrashIconPng} alt="Delete" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
