import React, {useState} from 'react';


const Accordion = ({title, dataInputs}) => {

    const [isActive, setIsActive] = useState(false);


    return (
        <div>
            <ul className="sidebar__block-list">
                <li className="sidebar__block-item">
                    <p className="sidebar__block-filter">
                        {
                            title
                        }
                    </p>
                    <span onClick={() => setIsActive(!isActive)}>
                            {
                                isActive ?
                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.52189 4.80888L0.698002 1.11512C0.434006 0.860095 0.433995 0.44661 0.697994 0.191586C0.961993 -0.0634387 1.39003 -0.0634287 1.65402 0.191593L4.99983 3.42366L8.34597 0.191264C8.60997 -0.0637608 9.038 -0.0637508 9.302 0.191271C9.566 0.446293 9.566 0.859778 9.30201 1.1148L5.49346 4.79388C5.48845 4.79904 5.48314 4.80385 5.47792 4.80889C5.24693 5.03171 4.89016 5.05981 4.62792 4.89255C4.59042 4.86862 4.5549 4.84077 4.52189 4.80888Z" fill="#363A45"/>
                                    </svg>
                                    :
                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.52189 0.191117L0.698002 3.88488C0.434006 4.13991 0.433995 4.55339 0.697994 4.80841C0.961993 5.06344 1.39003 5.06343 1.65402 4.80841L4.99983 1.57634L8.34597 4.80874C8.60997 5.06376 9.038 5.06375 9.302 4.80873C9.566 4.55371 9.566 4.14022 9.30201 3.8852L5.49346 0.206122C5.48845 0.200956 5.48314 0.196155 5.47792 0.19111C5.24693 -0.0317101 4.89016 -0.0598059 4.62792 0.107452C4.59042 0.131378 4.5549 0.159229 4.52189 0.191117Z" fill="#363A45"/>
                                    </svg>

                            }
                        </span>
                </li>
            </ul>
            <ul className="sidebar__block-list">
                {
                    isActive &&
                        <>
                            {
                                dataInputs.values.map(item => (
                                    <li className="sidebar__block-item2">
                                        <input type={dataInputs.type}/>
                                        <span>{item}</span>
                                    </li>
                                ))
                            }
                        </>
                }
            </ul>
        </div>
    );
};

export default Accordion;