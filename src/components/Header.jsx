import favicon from "/images/animeFavicon.png"

export default function Header(){
    return (
        <header>
            <img src={favicon} width="55px" alt="one piece logo"/>
            <h1>wumbo's Anime Watchlist of 2024</h1>
        </header>
    )
}