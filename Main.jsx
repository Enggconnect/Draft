import React from 'react'
import Sidebar from "./Sidebar"
import Search from "./search"
import Card from "./Card"
import Card2 from "./Card2"
import Username from "./Username"
import Mess from "./Mess"
import "./Main.css"
const Main = () => {
    return (
        <div className="main">
            <Sidebar />
            <div className="flexbox">
                <Search />
                <Card />
                <Card2 />
            </div>
            <Username />
            <Mess />
        </div>
    )
}

export default Main
