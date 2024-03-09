import logo from '../images/troll-face.png'

export default function Header() {
    return (
        <div className="navbar">
            <p className="navbar--bundle">
                <span className="navbar--title"><img className="navbar--logo" src={logo} alt="troll face logo"/><span className="meme">Meme Generator</span></span>
                <span className="navbar--course">React Course - Project 3</span>
            </p>
        </div>
    )
}