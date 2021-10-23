import React from 'react';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import GalleryList from '../GalleryList/GalleryList.jsx'


function App() {


  const [newGalleryItems, setGalleryItems] = useState([]);





  const getGalleryItems = () => {
      axios
      .get('/gallery')
      .then((response) => {
          // console.log('Gallery Items array: ', response);
          setGalleryItems(response.data)
      })
      .catch((error) => {
          console.log('GET ERROR in getGalleryItems: ', error);
      })
  }


  useEffect(() => {
    getGalleryItems();
  }, []);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
        newGalleryItems={newGalleryItems}
        getGalleryItems={getGalleryItems}
        />
      </div>
    );
}




export default App;
