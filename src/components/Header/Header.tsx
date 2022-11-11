import HeaderIcon from "../../assets/icons/Vector.svg"
import HeaderText from "../../assets/icons/Circeya.svg"
import PhoneIcon from "../../assets/icons/PhoneIcon.svg"
import "./Header.css"

interface props {
  windowWidth: number
}

const Header = ({windowWidth}: props ) => {
  return (
    <header>
      <div className="header-logo">
        <img src={HeaderIcon} alt="Icon" />
        <img src={HeaderText} alt="Circeya" />
      </div>
      <div className="header-phone">
        {windowWidth > 900 ? "+7 (495) 495-49-54" : <img src={PhoneIcon} alt="Call" />}
      </div>
    </header>
  )
}
export default Header