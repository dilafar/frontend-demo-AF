import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{width: '100%', height: '120px', backgroundColor: 'gray'}}>
    <div style={{ float : 'left',paddingLeft: "50px", marginTop: '20px'}}>
        <h2>ASSIGNMENT-DEMO-PROJECT</h2>
    </div>
    <div style={{display: "flex", float : 'right',paddingRight: "50px", marginTop: '20px'}}>
        
        <Link to='/product'>
        <button style={{padding: '10px',borderRadius: '3px'}}><h3>Product</h3></button></Link>
        <Link to='/notice'>
        <button style={{padding: '10px',borderRadius: '3px',marginLeft: '10px'}}><h3>Notice</h3></button></Link>
        <Link to='/'>
        <button style={{padding: '10px',borderRadius: '3px',marginLeft: '10px'}}><h3>Home</h3></button></Link>
    </div>
</div>
  )
}

export default Navbar