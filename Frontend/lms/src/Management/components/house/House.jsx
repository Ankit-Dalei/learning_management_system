import React from 'react'
import Cart from "../cart/Cart"

import Footer from '../Footer/Footer'


function House() {
    return (
        <>
            <section className='home'>
                <div className='container'>
                    <div className='heading flexSB'>
                        <h3>DashBoard</h3>
                        <span>Adminto / DashBoard</span>
                    </div>

                    <Cart />
                    <Footer />

                </div>
            </section>
        </>
    )
}

export default House