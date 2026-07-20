import React, { useEffect, useState } from 'react'
import back from '../../assets/back_arrow_icon.png'
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const {id}=useParams();
  const navigate= useNavigate();

  const [apiData, setApiData]= useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  // const options={
  //   method:'GET',
  //   headers:{
  //     accept:'application/json',
  //     Authorization:'Bearer eyJhbGci0iJIUzI1NiJ9.eyJhdwQiOiJlZTN1NzczZDIWY2M2Y2NhNWQ4YWVjMjQzNTdlNDc1ZCIsInN1YiI6IjY2MjIyMDFhYWUzODQzMDE4NzJhNTJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZX3zaw9uIjoxfQ.vPDW2QwNr9hIRdOvJx_x8hbHnDYZGHMtnZwfkqb3J8U'
  //   }
  // };
  // useEffect(()=>{
  //   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-us`,options)
  //   .then(response=>response.json())
  //   .then(response=>setApiData(response.results[0]))
  //   .catch(err=>console.error(err))
  // },[])

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWQzOTEzNTBlYzIxMDQxOWRhZGYyNTY2MGZmNjgyZCIsIm5iZiI6MTc4MzQwMDAyNi4wNzEsInN1YiI6IjZhNGM4NjVhMGU4YWNjYzllYmU3NDY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L4z_bjmiRoMlqlHbfBGaPthDqfnQA8xiqfiiIjG1i6I'
  }
};

useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));

},[])









  return (
    <div className='player'>
      <img src={back} alt="" onClick={()=>{navigate(-2)}} className='back' />
     
      <div className="playerinfo">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
      
    </div>
  )
}

export default Player
