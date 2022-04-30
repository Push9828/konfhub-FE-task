import eventImg from "../../assets/misc/event-img.png";
import podium from "../../assets/icons/podium.svg";
import info from "../../assets/icons/info.svg";
import status from "../../assets/icons/status.svg";
import "./eventcard.css";

export default function Eventcard({ data }) {
  return (
    <div className="event-card">
      <div className="type">
        <img src={status} alt="status" />
      </div>
      <img src={eventImg} alt="event" />
      <div className="event-data">
        <p className="event-name">{data.name}</p>
        <div className="event-details">
          <div className="event-info">
            <span>
              <img src={podium} alt="icon" />
            </span>
            <p>Raddison Blue</p>
          </div>
          <div className="event-info">
            <span>
              <img src={info} alt="icon" />
            </span>
            {data.isfree ? <p>Free |</p> : <p>Paid |</p>}
            {data.is_virtual ? <p>Online</p> : <p>Offline</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
