import React , {useState} from 'react'
import "./Navbar.css"

export default function Navbar() {

    const [blackBackground,setBlackBckground] = useState(false);

    window.addEventListener("scroll",() => {
        
        window.scrollY > 100 ? setBlackBckground(true) : setBlackBckground(false);
    })

    return (
        <div>
            <div className={`header ${blackBackground && "header_black"}`}>
            <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
            />
            <img
             className="nav_avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="Avatar"
            />
            </div>
        </div>
    )
}

