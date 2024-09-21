
import {FaGithub, FaInstagram, FaLinkedin, FaTiktok} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

export const socials = [
    {
        name: 'Irwan Hermawan',
        icon: <FaLinkedin/>,
        onClick: () => window.open("https://www.linkedin.com/in/irwanhermawan", "_blank")
    },
    {
        name: 'rwnhrmwn23',
        icon: <FaGithub/>,
        onClick: () => window.open("https://github.com/rwnhrmwn23", "_blank")
    },
    // {
    //     name: 'createdbywan',
    //     icon: <FaInstagram/>,
    //     onClick: () => window.open("https://instagram.com/createdbywan", "_blank")
    // },
    // {
    //     name: 'createdbywan',
    //     icon: <FaTiktok/>,
    //     onClick: () => window.open("https://tiktok.com/@createdbywan", "_blank")
    // },
    {
        name: 'rwnhermawan@gmail.com',
        icon: <MdEmail/>,
        onClick: () => window.open("mailto:rwnhermawan@gmail.com", "_blank")
    },
];
