import movies from '../data/movies.json'
import Movie from './Movie';

function Main() {



  return (
    <>


      {movies.map((element)=>{
        return <Movie  
        key={element.id} 
        id={element.id} 
        title={element.title}
        year={element.year} 
        genre={element.genres}
        rating={element.rating} />
      }) }



    </>
  );
}

export default Main;
