import React from 'react';
import './style.css';


const Home = () => {
    return (
        <div name="home">
            <h1>Yalla Ps</h1>
            <div className="container">
                <div className="item--1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdQLtq6jgMJlg6EPC9mNVvdubuL4o8vGnQboAXTm_hg&s"  />
                </div>
                <div className="item--2">
                    <img src="https://gaming-cdn.com/images/products/9456/orig/league-of-legends-pc-game-cover.jpg?v=1662363312" />
                </div>
                <div className="item--3">
                    <img src="https://arabgamerz.com/wp-content/uploads/2023/09/EA-FC-24-1200x628.webp" />
                </div>
                <div className="item--4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTq8NRO8JtZezQznXU8pzqmuBJrET1aR0LqAK1Y-QaA&s" />
                </div>
                <div className="item--5">
                    <img src="https://i.ytimg.com/vi/4uMqsyK3TtA/maxresdefault.jpg" />
                </div>
            </div>
        </div>
    );
  };
  
  export default Home;