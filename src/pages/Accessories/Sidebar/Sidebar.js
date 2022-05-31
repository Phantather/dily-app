import React, {useState} from 'react';
import Accordion from "./Accordion/Accordion";

const Sidebar = () => {



    return (
        <aside className="sidebar">
            <h3 className="sidebar__title">
                Цена
            </h3>
            <div className="sidebar__block">
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