import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {BsGrid3X3GapFill} from 'react-icons/bs'
import {FaThList} from 'react-icons/fa'
import Sidebar from "./Sidebar/Sidebar";

const Accessories = () => {

    const [grid, setGrid] = useState(false);


    return (
        <main>
            <div className="new-container">
                <Sidebar/>
                <section className="accessories">
                    <div className="accessories__nav">
                        <NavLink className="accessories__nav-link" to={'/'}>Главная страница</NavLink>
                        >
                        <NavLink className="accessories__nav-link" to={'/'}>Категории </NavLink>
                        >
                        <p className="accessories__nav-unlink">Телефоны и аксессуары</p>
                    </div>
                    <h2 className="accessories__title">
                        Телефоны и аксессуары
                    </h2>
                    <h3 className="accessories__subtitle">
                        Недавние объявления
                    </h3>
                    <div className="accessories__sort">
                        <p className="accessories__sort-info">
                            1200 объявлений
                        </p>
                        <div className="accessories__sort-row">
                            <p className="accessories__sort-text">Сортировать по</p>
                            <select className="accessories__sort-select">
                                <option className="accessories__sort-option" value="Новизне">
                                    Новизне
                                </option>
                                <option className="accessories__sort-option" value="По умолчанию">
                                    По умолчанию
                                </option>
                                <option className="accessories__sort-option" value="Дешевле">
                                    Дешевле
                                </option>
                                <option className="accessories__sort-option" value="Дороже">
                                    Дороже
                                </option>
                            </select>
                            <div className="accessories__sort-change">
                                <span onClick={() => setGrid(!grid)}>
                                       {
                                           !grid ?
                                               <FaThList/>
                                               :
                                               <BsGrid3X3GapFill/>

                                       }
                                </span>


                            </div>
                        </div>
                    </div>
                    <div className="accessories__row">
                        <div className={grid ? 'accessories__card' : 'card'}>

                                <span className="selection__like">
                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
<path
    d="M7.95639 2.37161L8.29009 2.87804L8.62422 2.3719C9.87742 0.473542 11.6294 0.0948946 13.0509 0.63139C14.4953 1.17655 15.6696 2.69254 15.6696 4.74398C15.6696 5.45358 15.2853 6.32286 14.6209 7.27687C13.9651 8.21854 13.0763 9.18711 12.1545 10.0844C11.2345 10.98 10.2917 11.795 9.53402 12.4306C9.26185 12.6589 9.01493 12.863 8.80078 13.0399C8.71643 13.1096 8.63716 13.1751 8.56344 13.2362C8.46272 13.3197 8.36974 13.3972 8.28792 13.4666C8.20168 13.3955 8.10344 13.3165 7.99731 13.2317C7.89077 13.1465 7.77408 13.0539 7.64771 12.9536C7.44979 12.7965 7.22814 12.6206 6.98469 12.4251C6.19238 11.7891 5.20356 10.9737 4.23745 10.0777C3.26943 9.17999 2.33491 8.21105 1.64523 7.26916C0.945605 6.31368 0.544043 5.44728 0.544043 4.74398C0.544043 2.69125 1.79598 1.16897 3.34062 0.621516C4.86843 0.0800294 6.71146 0.482269 7.95639 2.37161Z"
    stroke="#00C65E" stroke-width="0.8"/>
</svg>
                        </span>
                                <img src="" alt="" className="accessories__img"/>
                                <h4 className="accessories__descr">
                                    Телефон Xiaomi Redmi
                                </h4>
                                <div className="accessories__info">
                                    <div>
                                        <p className="accessories__price">
                                            10 000 ₽
                                        </p>
                                        <p className="accessories__loc">
                                            Москва
                                        </p>
                                    </div>
                                    <div className="accessories__user">
                                        <img className="accessories__user-img" src="" alt=""/>
                                    </div>
                                </div>

                            {/*<div className="card__right" style={{display: grid ? 'none' : 'block'}}>*/}
                            {/*    <h3>*/}
                            {/*        Описание товара*/}
                            {/*    </h3>*/}
                            {/*    <p>*/}
                            {/*        Продаю IPhone XS, абсолютно новый, в комплекте идёт только коробка*/}
                            {/*        и сам телефон, проверить сможете при встрече.*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Accessories;