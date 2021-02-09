import { useHistory } from "react-router-dom";

function NavBar()
{
    const history = useHistory();
    
    const signUp = () =>
    {
        history.push("/signup")
    }

    const logIn = () =>
    {
        history.push("/login")
    }

 
        return (
            <div>
                <nav className="navbar is-fixed-top is-warning">
                    <div className="signup-login-button is-flex navbar-end">
                        <button className="button is-primary" onClick={logIn}>Log In</button>
                        <button className="button is-info" onClick={signUp}>Sign Up</button>
                    </div>
                </nav>
            </div>
        )
    
}

export default NavBar;