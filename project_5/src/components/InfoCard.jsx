import React from 'react'

function InfoCard(props) {
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-60 rounded w-full object-cover object-center mb-6" src={props.imgSrc} alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{props.subtitle}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{props.cardName}</h2>
                <p className="leading-relaxed text-base font-light text-gray-500 ">{props.cardDes}</p>
            </div>
        </div>
    )
}
export default InfoCard
