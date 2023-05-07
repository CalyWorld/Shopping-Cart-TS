import { FaGithub } from "react-icons/fa";

export const ContactPage = () => {

    const iconStyle = {
        width: "50px",
        height: "50px",
        color: "black"
      };

    return (
        <div className="flex justify-center items-center">
           <a href="https://github.com/CalyWorld" rel="noreferrer" target="_blank"><FaGithub style={iconStyle}/></a>
        </div>
    )
}