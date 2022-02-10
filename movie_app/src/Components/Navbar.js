import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex',padding:'5px',alignItems:'center'}} >
          <h1>Movies App</h1>
          <h2 style={{marginLeft:'30px'}}>Favorites</h2>
      </div>
    )
  }
}
export default Navbar;
