import "../styles/Footer.scss";
import { Locale } from "../common/Locale";

export default function DogImage() {
  return (
    <div className="footer">
      <p>{Locale.everyDogIsTheBestDog}</p>
      <p>{Locale.allRightsReserved}</p>
    </div>
  );
}
