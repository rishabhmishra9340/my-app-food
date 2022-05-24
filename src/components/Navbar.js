import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'; 

const Navbar = () => {
    const thali=useSelector(state=>state.counter.thali)

    return (
        <div>
            <div className="header">
                <h1 className="h1head">FOOdvilla </h1>
            </div>
            <nav className="navbar">
                <div className="container-fluid">
                    <p style={{ fontFamily: 'cursive', fontSize: '25px' }}
                        className="navbar-brand" >Food<span style={{
                            color: 'rgb(26, 201, 157)',
                            fontSize: '25px',
                            fontFamily: 'cursive'
                        }}>Corner</span></p>

                    <div>
                        < ul className="bar" >
                            <li className="cartbuttonnav"><Link className="nav-link" to="/Cart">
                                <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
                                    width={'70px'} height={'70px'} />

                            </Link></li> 

                        </ul >
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
    