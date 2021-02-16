import { connect, useDispatch } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";

import { userLogOut } from "../../redux/actions/UserAuthentication";

const NavBar = (props) =>
{
    const dispatch = useDispatch();
    const history = useHistory();

    const routeChange = (event) =>
    {
        const path = event.target.value;
        
        history.push(path);
    }
  
    return (
        <div>
            <nav className="navbar is-fixed-top is-warning">
                <nav className="error-message is-flex navbar-start" style={{ color:"red" }}>
                    {props.errorMessage}
                </nav>

                <nav className="signup-login-button is-flex navbar-end">
                    {
                        (props.isLoggedIn) ?
                        (
                            <div>
                                <button className="button is-danger" value="/logout" onClick={() => dispatch(userLogOut(history))}>Log Out</button>
                            </div>
                        ) :
                        (
                            <div>
                                <button className="button is-primary" value="/login" onClick={routeChange}>Log In</button>
                                <button className="button is-info" value="/signup" onClick={routeChange}>Sign Up</button>
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