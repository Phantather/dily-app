import React, {useState} from 'react';
import Accordion from "./Accordion/Accordion";

const Sidebar = () => {



    return (
        <aside className="sidebar">
            <h3 className="sidebar__title">
                Цена
            </h3>

            <div className="sidebar__block">
                <div className="sidebar__change">
                    <input className="sidebar__change-number" type="number"/>
                    <input className="sidebar__change-number" type="number"/>
                    <input className="sidebar__change-range" type="range"/>
                </div>
                <Accordion title={"Формат покупки"}/>
                <div className="sidebar__block-btns">
                    <button className="sidebar__block-btn">
                        Применить
                    </button>
                    <button className="sidebar__block-btn">
                        Сбросить фильтры
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;