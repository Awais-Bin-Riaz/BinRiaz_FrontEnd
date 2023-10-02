import React, { useEffect, useState } from "react";
import G1 from "../../images/Galleryimg/G1.jpg"
import G2 from "../../images/Galleryimg/G2.jpg"
import G3 from "../../images/Galleryimg/G3.jpeg"
import G4 from "../../images/Galleryimg/G4.jpg"
import G5 from "../../images/Galleryimg/G5.jpg"
import G6 from "../../images/Galleryimg/G6.jpg"
import "./style.css";

export const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: G1
        },
        {
            id: 2,
            imgSrc: G2
        },
        {
            id: 3,
            imgSrc: G3
        },
        {
            id: 4,
            imgSrc: G4
        },
        {
            id: 5,
            imgSrc: G5
        },
        {
            id: 6,
            imgSrc: G6
        },
    ]
    const [model, setModel] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true)
    }

    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} />
                <button placeholder="X" title="close" onClick={() => setModel(false)} >X</button>
            </div>
            <div className="gallery">
                {
                    data.map((item, index) => {
                        return (
                            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} style={{ width: '100%' }} />
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}
