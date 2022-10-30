import React from 'react'
import '../index.css'
function Card({ card, handleChoice, flipped, disabled, }) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }
    return (
        <div className="card">
            <div className={flipped ? 'flipped' : ''}>
                <img
                    height='100'
                    width='100'
                    src={card.src}
                    alt="front"
                    className="front"
                />
                <img
                    height='100'
                    width='100'
                    src="/imgs/nick.png"
                    alt="back"
                    className="back"
                    onClick={handleClick}
                />
            </div>
        </div>)
}

export default Card