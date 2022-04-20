import React, { Component } from 'react'
import '../App.css'

export class TenantItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#c5e2d2',
      textDecoration: 'line-through'
    }
    const {nepa, security, lawma, moved, id, fullname} = this.props.tenant
    return (
      <li className='tenant-item'>
        <input 
            type='checkbox' 
            checked={moved} 
            onChange={() => this.props.handleChange(id)}    
        />
        <button className='btn-style' onClick= {() => {this.props.deleteTenant(id)}}>X</button>
        <span style={moved ? completedStyle : null}>
          <b>Fullname</b>: {fullname}<br></br>
          <b>Nepa</b>:  {nepa}<br></br>
          <b>Security</b>: {security}<br></br>
          <b>Lawma</b>: {lawma}<br></br>
          <b>Moved</b>: {moved}<br></br>
        </span>
      </li>
      
    )
  }
}

export default TenantItem

 