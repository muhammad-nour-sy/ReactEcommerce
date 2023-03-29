import React from "react";

import "./Button.css";
import { Link } from "react-router-dom";

const Button = () => {
    return (
        <Link to="/signup" className="sign-up">
            <button className="signup-btn">Sign Up</button>
        </Link>
    );
};

export default Button;
