import { Link } from "react-router-dom";
import "../../style/herodeal.css";
import Button from "../../ui/Button";

const HeroDeal = ({ data, handleClickError }) => {
  return (
    <div className="herodeal-card-wrapper">
      <div className="herodeal-content">
        <div className="heroDealImgWrap">
          <img src={data.imageHome} alt="" className="herodealimg" />
        </div>
        <div class="herodealCard">
          <div class="herodeal-card-content">
            <h2>{data.heading}</h2>
            <p>{data.description}</p>
            <Link to={`/restaurant/${data._id}`}>
              <Button onClick={handleClickError} className="herodeal-button">
                View More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDeal;
