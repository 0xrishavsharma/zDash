import "./MainDash.scss";
import React from 'react'
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const MainDash = () => {
  return (
    <div className="mainDash">
        <h1>Dashboard</h1>
        <Cards />
        <Table />
    </div>
  )
}

export default MainDash;