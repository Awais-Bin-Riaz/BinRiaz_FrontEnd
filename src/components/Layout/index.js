import React from 'react'
import { Contact } from '../Contact'
import { Header } from '../Header'
import { MenuHeader } from '../MenuHeader'
import { BackToTop } from '../BackToTop/BackToTop'
import Footer from '../Footer'

/**
* @author
* @function Layout
**/

export const Layout = (props) => {
  return(
<>
<Header/>
<MenuHeader/>
{props.children}
<Contact/>
<BackToTop/>
<Footer/>
</>   
)

 }