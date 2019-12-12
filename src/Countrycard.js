import React from 'react';

const slider = [
    { img: 'https://www.docplanner.com/images/warsaw.png', title: 'Warsaw' },
    { img: 'https://www.docplanner.com/images/barcelona.png', title: 'Barcelona' },
    { img: 'https://www.docplanner.com/images/istanbul.png', title: 'Istanbul' },
    { img: 'https://www.docplanner.com/images/rome.png', title: 'Rome' },
    { img: 'https://www.docplanner.com/images/mexico-city.png', title: 'Mexico' },
    { img: 'https://www.docplanner.com/images/curitiba.png', title: 'Curitiba' }]

const Countrycard = () => {
    return (
        <div className='offices'>
            <div className='header-offices'>
                <h2> Improve the lives of millions.<br /> Change yours forever</h2>
                <p>More than 1000 team mates share our same vision, goals and passion.<br />
                    With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
            </div>
            {slider.map(el => <a className='slider-items'>
                <img src={el.img} />
                <h4> {el.title} </h4>
                <button> SEE OPENING </button> </a>)}
        </div>
    )
}


export default Countrycard