import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import { Routes, Route, Link } from 'react-router-dom';
import Login from "./login";

function Nav() {
    return (
        <header className="main">
            <Navbar shadow={false} className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-lilac border-2 border-dark">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-serif text-2xl font-bold text-dark">ChibiCharms</Typography>
                    <div className="flex items-center gap-x-1">
                        <Link to="/login"><Button variant="text" size="lg" className="hidden lg:inline-block bg-light text-dark border-2 border-dark"><span>Log In</span></Button></Link>
                        <Button variant="text" size="lg" className="hidden lg:inline-block bg-bubblegum text-dark border-2 border-dark"><span>Sign Up</span></Button>
                    </div>
                </div>
            </Navbar>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </header>
    );
}

export default Nav;