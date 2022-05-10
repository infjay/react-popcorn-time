function Movie(props){
    return(
        <div>
        <h3>{props.id}.Title: {props.title}</h3>
        <p>Year: {props.year}</p>
        <p>Genre: {props.genres}</p>
        <img src={props.imgURL} alt="image"></img>
        <p>Rating : {props.rating}/10</p>
        </div>
    )
}

export default Movie;