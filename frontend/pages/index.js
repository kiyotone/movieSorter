import SubHomePage from "@/components/pages/Home";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./_app";

export default function Home({data}) {
  const {text,setMovies} = useContext(GlobalContext)
  console.log({movieData:data})

  useEffect(()=>{
    setMovies(data?.Search)
  },
  [setMovies,data]
  )

  useEffect(()=>{
    const fetchMovies = async ()=>{
      await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=c4dbb338&s=${text}`).
      then((r)=> r.json())
      .then((res)=>{
  
        setMovies(res?.Search)  
     
      }).catch((error)=>{
        console.log(error)
      }
      )
    }

    fetchMovies()
  },[text,setMovies])

  return (

    <div>

      <SubHomePage/>



    </div>

    
)}

export const getServerSideProps = async () => {
  try {
   const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=c4dbb338&s=Superman').then((r)=> r.json()).then((res)=>res)
   return {
     props : {data : response },
   };
  }
  catch (error){
   console.log(error)
  }
}