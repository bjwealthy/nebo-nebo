import React from 'react'

function Header() {
    const headerStyle = {
        backgroundColor: "#678c89",
        color: '#fff',
        padding: '10px 5px ',
        textAlign: 'center'
    }
    return (
        <header style={headerStyle}>
            <h1 style={{fontSize: '35px', lineHeight: '1.447em', margin: '0px'}}>NeboNebo App</h1>
            <h5 style={{fontSize: '20px'}}>Manage utility bills among neighbors and <a href='#'>make transfers and payments to nepa, lawma and so on</a></h5>
        </header>
    )
}

export default Header