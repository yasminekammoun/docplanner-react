import React from 'react';
 
const arr = [`We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere`, 
`We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.`]

const Section = () =>{
    return (
        <div className="Sect1">
            <img src="https://www.docplanner.com/img/sygnet.png" className="image"/>
            <h6 className='titre'>Making the healthcare experience more human</h6>
            <div className='text'>
            {arr.map((el,index)=> <p key={index} className ='paragh' >{el}</p>)}
            </div>
        </div>
    )
}


export default Section ;