import React from 'react';

export default function Component (props) {
    const {user, input, index, selectedItem, handleKeyDown, handleHover} = props;


    function highlightText(str, input) {
        let index = str.toLowerCase().indexOf(input.toLowerCase());
        if(typeof str !== "object" && index>=0) {
        return (
            <span>{str.substring(0,index)}<span style={{color: 'blue'}}>{str.substring(index, index+input.length)}</span>{str.substring(index+input.length,str.length)}</span>
        )
    }
    else {
        return (str);
    }
    }

    return (
            <div className={index == selectedItem? "listCard selected": "listCard"}
            id ={index}
            onKeyDown={handleKeyDown}
            onMouseOver={handleHover}
            >
            <strong>{highlightText(user.id, input)}</strong><br/>
            <span className="name">{highlightText(user.name, input)}</span><br/>
            {typeof(user.match) == "object" ? (<ul className="item-found"><li>"{input}" found in Items</li></ul>): ("")}
            <span className="address">{highlightText(user.address, input)}</span><br/>
            </div>
        )
}