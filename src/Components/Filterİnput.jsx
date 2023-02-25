import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

import React from 'react'

 const Filterİnput = ({title,description,imageSrc}) => {


    const navigate = useNavigate();

    const [filter, setFilter] = useState("");
    return (
        <div className='inputFilter'>
            <input type="search" placeholder="Nə axtarırsınız?" onChange={(e) => {
                setFilter(e.target.value)
            }} />
            <div className='dataContainer'>
                {Data
                    .filter((value) => {
                        if (setFilter == "") {
                            return value;
                        } else if (value.title.toLocaleLowercase().inludes(setFilter.toLocaleLowercase())) {
                            return value;
                        }
                    }).map((value) => {
                        return (
                            <div className="data" key={value.id}>
                                <h5>
                                    {value.title}
                                    {value.description}
                                </h5>
                                <img src={value.imageSrc} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Filterİnput