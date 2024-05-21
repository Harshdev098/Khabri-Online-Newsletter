import React from 'react'
import image from '../../src/image.jpg'

export default function NewsItem(props) {
    return (
        <div className="boxes">
            <img src={!props.imgUrl ? image : props.imgUrl} alt="..." />
            <div >
                <h5>{props.title}...</h5>
                <p>{props.desc}...</p>
                <div className="linkToWeb">
                <a href={props.url}>Go to Link</a>
                </div>
            </div>
        </div>
    )
}
