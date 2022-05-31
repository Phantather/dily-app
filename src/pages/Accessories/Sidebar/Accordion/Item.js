import React from 'react';
import Input from "./Input";

const Item = ({radio, e}) => {
    return (
        <li className="sidebar__block-item2">
            <Input typeOf={"radio"}/>
            <span>{radio}</span>
        </li>
    );
};

export default Item;