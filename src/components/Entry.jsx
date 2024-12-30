import play from "/images/play.png"

export default function Entry(props){
    return (
        <article className="anime-entry">
        <div className="main-image-container">
            <img 
                className="main-image"
                src= {props.img.src}
                alt={props.img.alt}
            />
        </div>
        <div className="info-container">
            <img 
                className="play"
                src={play}
                alt="play button"
            />
            <span className="platform">{props.platform}</span>
            <a href={props.link}>View on IMDb</a>
            
            <h2 className="entry-title">{props.title}</h2>
            <p className="seasons">{props.seasons}</p>
            <p className="entry-text">{props.text}</p>
        </div>
            
        </article>
    )
}