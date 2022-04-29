import logo from "../../assets/misc/logo.svg";
import headerimg from "../../assets/misc/header-img.svg";
import "./header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="navbar">
        <img src={logo} alt="logo" />
      </div>
      <div className="hero">
        <div className="header-des">
          <h1>Events</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra
          </p>
        </div>
        <div className="header-img">
          <img src={headerimg} alt="Header Img" />
        </div>
      </div>
    </div>
  );
}
