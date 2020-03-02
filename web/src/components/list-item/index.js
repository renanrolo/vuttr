import React from 'react'
import './style.css'

export default ({ item, removeTool }) => (
    <div className="box-item card-main-flat">
        <div className="box-item-title">
            <a href={item.link}>{item.title}</a>
            <span
                className="box-item-remove"
                onClick={() => (removeTool(item))}>
                <span className="icon-close"></span> remove
            </span>
        </div>
        <p>{item.description}</p>
        <p className="box-item-tags">
            {item.tags.map((tag, index) => (<span key={index}>#{tag}</span>))}
        </p>
    </div>
)