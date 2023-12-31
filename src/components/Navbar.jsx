import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Navbar = ({User}) => {
    const [Show, setShow] = useState(false)
    const ToggleSearch = ()=>{
        setShow((prev)=> !prev)
    }
    const HandleLogout = ()=>{
        window.open("http://localhost:4000/auth/logout","_self");
    }
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/pinterest-round-color-icon.png" className='imgLogo' alt="" />
                Pinterest
                <br />
                {Show ?
                    <div className="searchbar">
                        <FaSearch className='searchFa' color='grey' />
                        <input type="text" placeholder='Search ' />
                    </div> : null}
            </div>
            <div className="icons">
                <div className='ico'>
                    <FaSearch onClick={ToggleSearch} size={"22px"} />
            <div class="tooltip-text">{"Search"}</div>
                </div>
                <div className='ico'>
                    <FaBell size={"22px"} />
            <div class="tooltip-text">{"Notification"}</div>
                </div>
                <div className='ico'>
                    <AiFillMessage size={"22px"} />
            <div class="tooltip-text">{"Message"}</div>
                </div>
              {User ?   <div className='ico'>
                   <img src={User?.photos[0].value} alt=""  className="UserLogo"/>
            <div class="tooltip-text">{User?.displayName}</div>
                </div> : null}
                {
                    User ? <div className='ico' onClick={HandleLogout}>
                    <RiLogoutCircleRLine size={"22px"} />
            <div class="tooltip-text">{"Logout"}</div>

                </div> : null
                }
                <div className='ico'>
                    <MdKeyboardArrowDown size={"22px"} />
            <div class="tooltip-text">{"DropDown"}</div>
                </div>
            </div>
        </div>
    )
}


export default Navbar
