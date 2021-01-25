import {useState, useEffect } from 'react'

const useInitialState = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] })
  const [categories, setCategories] = useState({ categories: []})
  
  useEffect ( () => {
    fetch('http://localhost:3000/initalState')
      .then(response => response.json())
      .then(
        data => {
          setVideos(data);
          setCategories(Object.keys(data));
        })
  }, [])


  console.log(`Videos:`, videos)
  console.log(`Categories:`, categories)
  return [videos, categories];

}

export default useInitialState;



