function Movie(props){

    let content;

    if(props.rating > 8) {
        content = <span>Recommended</span>
    }

    return(
        <div>
        <h3>{props.id}.Title: {props.title}</h3>
        <p>Year: {props.year}</p>
        <p>Genre: {props.genres}</p>
        <img src={props.imgURL} alt="image"></img>
        <p>Rating : {props.rating}/10 <br/>
            {content}
       </p>
        </div>
    )
}

export default Movie;