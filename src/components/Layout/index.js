import React from 'react'
import Header from "../Header"

/**
* @author
* @function Layout
**/

const Layout = (props) => {
    return (
        <div>
            <Header />
            <div>
                {props.children}
            </div>
        </div>
    )
}


export default Layout