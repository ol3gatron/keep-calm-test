import "./Section.css"
import image from "../../assets/images/Mask Group.png"

const Section = () => {
  return (
    <section>
      <img src={image} alt="" />
      <div className="section-desc">
        <p className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p className="text">Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
    </section>
  )
}
export default Section