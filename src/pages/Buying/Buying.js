import React, {useState} from 'react';
import card1 from './images/card1.png'
import card2 from './images/card2.png'
import card3 from './images/card3.png'
import advise1 from './images/advice1.png'
import advise2 from './images/advice2.png'
import advise3 from './images/advice3.png'
import advise4 from './images/advice4.png'
import advise5 from './images/advice5.png'
import star from './images/star.png'
import Sell from "./Sell/Sell";

const Buying = () => {
    const [overlay, setOverlay] = useState(false);


    return (
        <div className={'buying'}>
            <section className="buying__start">
                <div className="container">
                    <div className={'buying__start-info'}>
                        <h2 className={'buying__start-title'}>Скупка Дили-самая выгодня скупка
                            в Москве</h2>
                        <p className={'buying__start-text'}>Купим любые товары и б/у технику очень выгодно. Оставьте заявку на выкуп прямо сейчас!</p>

                        <button className={'buying__start-btn'} onClick={() => setOverlay(!overlay)}>Узнать цену сейчас</button>
                    </div>
                </div>
            </section>

            {overlay &&
                <>
                    <section className={'buying__overlay'} onClick={() => setOverlay(!overlay)}> </section>
                    <div className="buying__popup">
                        <div className={'buying__popup-close'} onClick={() => setOverlay(!overlay)}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.6838 12.5735C15.2491 13.179 15.2491 14.1608 14.6838 14.7663L14.3168 15.1593C13.7515 15.7648 12.8348 15.7648 12.2694 15.1593L8.00019 10.5868L3.73094 15.1593C3.16557 15.7648 2.24893 15.7648 1.68357 15.1593L1.31662 14.7663C0.75125 14.1608 0.751249 13.179 1.31662 12.5735L5.58587 8.00105L1.3166 3.4286C0.751236 2.82308 0.751237 1.84134 1.3166 1.23582L1.68355 0.842811C2.24892 0.237293 3.16556 0.237292 3.73093 0.84281L8.00019 5.41527L12.2695 0.84281C12.8348 0.237292 13.7515 0.237293 14.3168 0.842811L14.6838 1.23582C15.2492 1.84134 15.2492 2.82308 14.6838 3.4286L10.4145 8.00105L14.6838 12.5735Z" fill="#00C65E"/>
                            </svg>

                        </div>
                        <Sell/>
                    </div>
                </>

            }


            <section className={'buying__row'}>
                <div className="container">
                    <h2 className={'buying__row-title'}>Продайте нам на раз - два - три</h2>
                    <div className={'buying__row-wrapper'}>
                        <div className={'buying__row-card'}>
                            <p className={'buying__row-num'}>1</p>
                            <p className={'buying__row-text'}>Бесплатная онлайн-оценка</p>
                            <img className={'buying__row-img'} src={card1} alt="icon"/>
                        </div>
                         <div className={'buying__row-card'}>
                            <p className={'buying__row-num'}>2</p>
                            <p className={'buying__row-text'}>Привозите нам или вызовите специалиста</p>
                            <img className={'buying__row-img'} src={card2} alt="icon"/>
                        </div>
                         <div className={'buying__row-card'}>
                            <p className={'buying__row-num'}>3</p>
                            <p className={'buying__row-text'}>Подпишите договор и получите деньги</p>
                            <img className={'buying__row-img'} src={card3} alt="icon"/>
                        </div>

                    </div>
                </div>
            </section>



            <section className={'buying__advices'}>
                <div className="container">
                    <div className="buying__advices-wrapper">
                        <div className="buying__advices-block buying__advices-block1">
                            <div className={'shadow-box buying__advices-card buying__advices-card1'}>
                                <img className={'buying__advices-card_img'} src={advise1} alt=""/>
                                <p className={'buying__advices-card_text buying__advices-card_text1'}>Выплачиваем больше на 15–20%, чем в других пунктах скупки.</p>
                            </div>
                            <div className={'shadow-box buying__advices-card buying__advices-card3'}>
                                <img className={'buying__advices-card_img'} src={advise3} alt=""/>
                                <img src={star} alt=""/>
                                <p className={'buying__advices-card_text'}>Cразу забираем товар
                                    и отдаем всю сумму наличными – все честно и прозрачно</p>
                            </div>
                        </div>


                        <div className="buying__advices-block buying__advices-block2">
                            <div className={'shadow-box buying__advices-card buying__advices-card2'}>
                                <img className={'buying__advices-card_img'} src={advise2} alt=""/>
                                <p className={'buying__advices-card_text'}> Быстро и безопасно избавляетесь от вещей, которыми давно не пользуетесь</p>
                            </div>
                            <div className={'shadow-box buying__advices-card buying__advices-card4'}>
                                <img className={'buying__advices-card_img'} src={advise4} alt=""/>
                                <p className={'buying__advices-card_text'}>По желанию клиентов наш специалист приезжает по указанному адресу</p>
                            </div>
                        </div>


                        <div className="buying__advices-block buying__advices-block3">
                            <div className={' buying__advices-card buying__advices-card6'}>
                                <div className={'buying__advices-card_text buying__advices-card_title'}>ИЗБАВЛЯЙТЕСЬ <br/>
                                    ОТ НЕНУЖНЫХ ВЕЩЕЙ <br/>
                                    <p>ВЫГОДНО </p>
                                    <p className={'buying__advices-card_title-last'}>И С ПОЛЬЗОЙ</p>
                                    </div>
                            </div>
                            <div className={'shadow-box buying__advices-card buying__advices-card5'}>
                                <img style={{marginRight:'40px'}} className={'buying__advices-card_img'} src={advise5} alt=""/>
                                <p className={'buying__advices-card_text'}>Заботимся об окружающей среде, давая вторую жизнь вашим вещам</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

                    {/*<img src={bg} alt=""/>*/}
        </div>
    );
};

export default Buying;