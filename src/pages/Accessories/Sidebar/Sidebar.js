import React from 'react';
import Accordion from "./Accordion/Accordion";

const Sidebar = () => {

    const formatInputArr = {
        values: ["Все объявления", "Лучшая цена", "Аукцион", "Купить сейчас"],
        type: 'radio'
    };
    const termInputArr = {
        values: ["1 месяц", "7 дней", "Все время"],
        type: 'checkbox'
    };
    const salesmanInputArr = {
        values: ["Магазин", "Частное лицо"],
        type: 'checkbox'
    };
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
                <Accordion title={"Формат покупки"} dataInputs={formatInputArr}/>
                <Accordion title={"Срок размещения"} dataInputs={termInputArr}/>
                <Accordion title={"Продавец"} dataInputs={salesmanInputArr}/>
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