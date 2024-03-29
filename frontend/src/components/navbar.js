import React from "react";


function Nav() {

return (
    <header className="main">
            <nav className='navigation'>
                <ul style={{"listStyleType":"none"}}>
                    <li className="Logo">ChibiCharms</li>
                    <button>Login</button>
                    <button>Sign Up</button>
                </ul>
            </nav>
    </header>
);}

export default Nav;