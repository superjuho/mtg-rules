import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { withRouter } from 'react-router';


const Nav  = ({ history }: any) => {
    const [searchTerm, setSearchTerm] = useState(' ')
    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
        console.log(searchTerm);
      };
    
    const doSearch = () => {
        if(searchTerm.length > 3)
        history.push('/search' + searchTerm)
    }

    return (
        <div className="navigation">
            <Link to="/" className="navMainTitle">Magic the Gathering Rulezzz</Link>
            <form>
            <label>Search</label>
            <input 
                type="text" 
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
                />
            <button onClick={doSearch}>🔍</button>
            </form>
        </div>
    )
}

Nav.propTypes = {
    history: PropTypes.object,
  };

export default withRouter(Nav)
