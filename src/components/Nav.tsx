import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { withRouter } from 'react-router'
import '../styles/Nav.css'


const Nav  = ({ history }: any) => {
    const [searchTerm, setSearchTerm] = useState('')
    const handleChange = (event: any) => {
        setSearchTerm(event.target.value)
        console.log(searchTerm)
      };
    
    const doSearch = () => {
        if(searchTerm.length > 3)
        history.push('/search' + searchTerm)
    }

    return (
        <div className="navigation">
            <Link to="/" className="navMainTitle">Magic: the Gathering Rules</Link>
            <div className="search">
            <input 
                type="text" 
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
                />
            <button className="searchBtn" onClick={doSearch}>🔍</button>
            </div>
        </div>
    )
}

Nav.propTypes = {
    history: PropTypes.object,
  };

export default withRouter(Nav)
