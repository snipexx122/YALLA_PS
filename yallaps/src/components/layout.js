import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Outlet, Link } from 'react-router-dom';
import './style.css';

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const playstationData = [
    { id: 1, name: 'PlayStation 4', location: 'loran' },
    { id: 2, name: 'PlayStation 3', location: 'san stefano' },
    { id: 3, name: 'PlayStation 4', location: 'el raml' },
    { id: 4, name: 'PlayStation 3', location: 'stanly' },
    { id: 5, name: 'Gaming PC', location: 'Loran', type: 'pc' },
    { id: 6, name: 'High-end PC', location: 'San Stefano', type: 'pc' },
    { id: 7, name: 'Budget Gaming PC', location: 'El Raml', type: 'pc' },
    { id: 8, name: 'Mid-range PC', location: 'Stanly', type: 'pc' },
  ];

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === '') {
      setSearchResults([]);
    } else {
      const results = playstationData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="list">
          <li>
            <Link to="/" className="home" id="forHome">Yalla Ps</Link>
          </li>
          <li>
            <Link to="/loginUser" className="home" id="forForm">User</Link>
          </li>
          <li>
            <Link to="/login" className="home" id="forForm">Cyper Owner</Link>
          </li>
          {isLoggedIn && (
            <li className="profile-link">
              <Link to="/profileUser" className="home">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li className="profile-link">
              <Link to="/profileAdmin" className="home">ProfileAdmin</Link>
            </li>
          )}
        </ul>
        <div className="input-group mb-3 search-bar">
          <input 
            type="text" 
            className="form-control py-2" 
            placeholder="Search Here" 
            aria-label="Search" 
            aria-describedby="basic-addon2" 
            value={searchInput}
            onChange={handleSearchChange} 
          />
          <span className="input-group-text p-3" id="basic-addon2">
            <BsSearch className='fs-6' />
          </span>
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map(result => (
                <div key={result.id} className="search-result-item">
                  <h5>{result.name}</h5>
                  <p>{result.location}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
