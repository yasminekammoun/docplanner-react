import React from 'react';

const boxcontainer = [{
    Title: 'For patients',
    Subtitle: 'Find a doctor, book a visit and solve any health-related doubt',
    img: "https://www.docplanner.com/img/screen-marketplace@2x.png"
},
{
    Title: 'For doctors',
    Subtitle: 'Save time managing visits and cut no-shows by half',
    img: "https://www.docplanner.com/img/screen-saas@2x.png"
}]
const country = [{
    title: 'Choose country '
},
{
    title: 'Argentina',
    link: 'http://www.doctoraliar.com'
},
{
    title: 'Australia',
    link: 'http://www.doctoraliar.au'
},
{
    title: 'Australia',
    link: 'http://www.doctoraliar.com'
}, {
    title: 'Brazil',
    link: 'http://www.doctoraliar.com'
}, {
    title: 'Chile',
    link: 'http://www.doctoraliar.com'
}, {
    title: 'Colombia',
    link: 'http://www.doctoraliar.com'
}, {
    title: 'Czech',
    link: 'http://www.doctoraliar.com'
}, {
    title: 'France',
    link: 'http://www.doctoraliar.com'
}, {
    title: 'Italy',
    link: 'http://www.doctoraliar.com'
}, {
    title: 'Mexico',
    link: 'http://www.doctoraliar.com'
}, {
    title: 'Peru',
    link: 'http://www.doctoraliar.com'
},
];

const Docpatcard = () => {
    return (
        <div className='col-Services'>
            {boxcontainer.map(el => <div className={el.Title === 'For patients' ? 'greencard' : 'bluecard'}>
                <p className='for'>{el.Title}</p>
                <h2 className='find'>{el.Subtitle}</h2>
                <div className="img-select">
                    {el.Title === 'For patients' ? <select name="Country" className="select">
                        {
                            country.map(el => <option>{el.title}</option>)
                        }
                    </select> :<div  className="select">
                    </div>
                    }
                    
                    <img className='img-service' src={el.img} />
                </div>
             

            </div>
            )}
        </div>
    )
}


export default Docpatcard;