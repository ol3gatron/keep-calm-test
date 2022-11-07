import HeaderIcon from "../../assets/icons/Vector.svg"
import HeaderText from "../../assets/icons/Circeya.svg"

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src={HeaderIcon} alt="Icon" />
        <img src={HeaderText} alt="Circeya" />
      </div>
      <p className="header-phone">
        +7 (495) 495-49-54
      </p>
    </header>
  )
}
export default Header