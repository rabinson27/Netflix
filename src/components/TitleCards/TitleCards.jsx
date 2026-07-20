import React,{useEffect, useRef, useState}from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';



const TitleCards = ({title, category}) => {

  const [apiData, setApiData]=useState([]);
   const cardsRef = useRef();

  //   const options={
  //   method:'GET',
  //   headers:{
  //     accept:'application/json',
  //     Authorization:'Bearer eyJhbGci0iJIUzI1NiJ9.eyJhdwQiOiJlZTN1NzczZDIWY2M2Y2NhNWQ4YWVjMjQzNTdlNDc1ZCIsInN1YiI6IjY2MjIyMDFhYWUzODQzMDE4NzJhNTJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZX3zaw9uIjoxfQ.vPDW2QwNr9hIRdOvJx_x8hbHnDYZGHMtnZwfkqb3J8U'
  //   }
  // };
  
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWQzOTEzNTBlYzIxMDQxOWRhZGYyNTY2MGZmNjgyZCIsIm5iZiI6MTc4MzQwMDAyNi4wNzEsInN1YiI6IjZhNGM4NjVhMGU4YWNjYzllYmU3NDY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L4z_bjmiRoMlqlHbfBGaPthDqfnQA8xiqfiiIjG1i6I'
  }
};


 
  const handleWheel=(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
  useEffect(()=>{
    // fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,options)
    // .then(response=>response.json())
    // .then(response=>setApiData(response.results))
    // .catch(err=>console.error(err))

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  

 

return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className='cardlist' ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
            </Link>
        })}
      </div>
    </div>
  )
};

export default TitleCards
