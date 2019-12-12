import React from 'react';
const baritems =['About us', 'Career', 'Departements']

const Navbar = () =>
    <div className='navbar'>
            <img src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1' className="logo" />
            <div className='baritems'>
                {baritems.map((el,index) => <a key={index} href="#" className={el == "About us" ? "blue" : "grey"}> {el} </a> )}
            </div>
            
    </div>
 



  
    
export default Navbar;