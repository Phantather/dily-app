import React from 'react';
import addPh from "../../Buying/images/advice1.png";

const Sell = () => {
    return (
        <div>
            <h2 className={'sell__title'}>Продать нам</h2>
            <form className={'sell__form'}>
                <div className={'sell__form-row'}>
                    <h3 className={'sell__form-title'}>Название товара</h3>
                        <input className={'sell__form-input'} placeholder={'Введите название'} type="text"/>
                </div>

                <div className={'sell__form-row sell__form-row_double'}>
                    <div>
                        <h3 className={'sell__form-title important'}>Состояние</h3>
                        <select className={'sell__form-input sell__form-input_half'} name="select">
                            <option style={{display: 'none'}} value="value2">Не выбрано</option>
                            <option value="value1">Новое</option>
                            <option value="value1">Хорошее</option>
                            <option value="value1">По хуже</option>
                        </select>
                    </div>
                    <div>
                        <h3 className={'sell__form-title important'}>Цена</h3>
                        <input className={'sell__form-input sell__form-input_half'} placeholder={'1000'} type="text"/>
                        <span> ₽</span>
                    </div>
                </div>

                <div className={'sell__form-row'}>
                    <h3 className={'sell__form-title'}>Описание товара </h3>
                    <input className={'sell__form-input'} placeholder={'Введите название'} type="text"/>
                </div>

                <div className={'sell__form-row sell__form-row_double'}>
                    <div>
                        <h3 className={'sell__form-title important'}>Телефон</h3>
                        <input className={'sell__form-input sell__form-input_half'} placeholder={'+ 7 (123)-456-78-90'} type="text"/>
                    </div>
                    <div>
                        <h3 className={'sell__form-title important'}>E- mail</h3>
                        <input className={'sell__form-input sell__form-input_half'} placeholder={'name@inbox.ru'} type="text"/>
                    </div>
                </div>

                <div className={'sell__form-row'}>
                    <h3 className={'sell__form-title'}>Выберите ваш город</h3>
                    <select className={'sell__form-input'} name="select">
                        <option style={{display: 'none'}} value="value2">Не выбрано</option>
                        <option value="value1">Бишкек</option>
                        <option value="value1">Москва</option>
                        <option value="value1">Тула</option>
                        <option value="value1">Стамбул</option>
                    </select>
                </div>

                <div className={'sell__form-row'}>
                    <h3 className={'sell__form-title'} >Фото/ видео</h3>
                    <div className={'sell__form-block'}>
                        <p className={'sell__form-addPhoto_top'}>Перетащите фото или <label htmlFor={'file'} className={'advertisement__form-addPhoto_link'} >выберите их на своем компьютере</label></p>
                        <input style={{display:'none'}} type="file" id={'file'}/>
                        <img className={'sell__form-addPh'} src={addPh} alt=""/>
                    </div>
                </div>

                <div className={'sell__form-row'}>
                    <div className={'sell__form-bottom'}>
                        <div className={'sell__form-check'}>
                            <input id={'check'} type="checkbox"/>
                            <label htmlFor="check"><span  className={'sell__form-label'} >Я согласен с условиями обработки
                                персональных данных</span></label>
                        </div>
                        <button className={'sell__form-btn'}>Узнать цену</button>
                    </div>

                </div>



            </form>
        </div>
    );
};

export default Sell;