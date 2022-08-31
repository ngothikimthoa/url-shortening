import Navigation from "../Navigation";
import Button from "../Button";
import "./index.scss";

export default function TheHeader() {
    return (
        <header className="header">
            <div className="header--left">
                <h2><a href="#">Shortly</a></h2>
                <Navigation></Navigation>
            </div>
            <div className="header--right">
                <a href="#">Login</a>
                <Button value="Sign Up"></Button>
            </div>
        </header>
    );
}