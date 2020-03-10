import React from 'react'

import Header from "../../components/Header"
import Main from "../../components/Main"
import Sidebar from "../../components/Sidebar"
import Footer from '../../components/Footer'

function Home() {
    return (
        <div>
            <Header></Header>
            <Main></Main>
            <Sidebar></Sidebar>
            <Footer></Footer>
        </div>
    )
}

export default Home