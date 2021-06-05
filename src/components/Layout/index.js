import React from 'react'
import Header from "../Header"

/**
* @author
* @function Layout
**/

const Layout = (props) => {
    return (
        <div>
            {/* <Header /> */}
            {/* <div style={{ paddingTop: '60px' }}> */}
            <div>
                {props.children}
            </div>
        </div>
    )
}


export default Layout