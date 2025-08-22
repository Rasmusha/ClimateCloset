import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav id="navbar">
            <div id="title">ClimateCloset</div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="">Clothes</a></li>
                    <li><Link to="/add-clothes">Add clothes</Link></li>
                </ul>
            </div>
        </nav>
    );
}