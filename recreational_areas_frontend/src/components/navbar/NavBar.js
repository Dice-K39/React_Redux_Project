import { connect, useDispatch } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";

import { userLogOut } from "../../redux/actions/UserAuthentication";

const NavBar = (props) =>
{
    const dispatch = useDispatch();
    const history = useHistory();

    const routeChange = (event) =>
    {
        const path = event.target.name;

        history.push(path);
    }
  
    return (
        <div>
            <nav className="navbar is-fixed-top is-warning">
                <nav className="navbar-buttons navbar-start pt-1" style={{ marginRight: "0px"}}>
                    <button className="button is-primary" style={{ marginLeft: "10px", marginRight: "10px" }} name="/" onClick={routeChange}>Home</button>
                    <button className="button is-info" style={{ marginLeft: "10px", marginRight: "10px" }} name="/about" onClick={routeChange}>About</button>
                    <button className="button is-success" style={{ marginLeft: "10px", marginRight: "10px" }} name="/contact" onClick={routeChange}>Contact</button>
                </nav>

                <nav className="error-message navbar-end pt-3" style={{ color:"red" }}>
                    {props.errorMessage}
                </nav>

                <nav className="signup-login-button navbar-end pt-1">
                    {
                        (props.isLoggedIn) ?
                        (
                            <div className="navbar-logout">
                                <button className="button is-danger" name="/logout" onClick={() => dispatch(userLogOut(history))}>Log Out</button>
                            </div>
                        ) :
                        (
                            <div className="navbar-auth">
                                <button className="button is-primary" style={{ marginLeft: "10px", marginRight: "10px" }} name="/login" onClick={routeChange}>Log In</button>
                                <button className="button is-info" style={{ marginLeft: "10px", marginRight: "10px" }} name="/signup" onClick={routeChange}>Sign Up</button>
                            </div>
                        )
                    }
                </nav>
            </nav>
        </div>
    )
 
}

const mapStateToProps = state =>
{
    return (
        {
            isLoggedIn: state.auth.loggedIn,
            errorMessage: state.auth.message || state.favorites.message
        }
    )
}

export default withRouter(connect(mapStateToProps)(NavBar));