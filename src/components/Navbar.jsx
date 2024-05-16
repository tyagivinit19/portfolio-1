import logo from "../assets/logo_outline.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className=' mb-20 flex items-center justify-between py-6'>
            <div className="flex flex-shrink-0 items-center">
                <img className="mr-2 w-20" src={logo} alt="" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/tyagivinit19/" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/tyagivinit19" target="_blank"><FaGithub /></a>
                <a href="" target="_blank"><FaSquareXTwitter /></a>
                {/* <a href="" target="_blank"><FaInstagram /></a> */}
            </div>
        </nav>
    )
}

export default Navbar