import "./Section.css"

interface props {
  image: string,
  subtitle: string,
  text: string,
}

const Section = ({image, subtitle, text}: props) => {
  return (
    <section>
      <div className="section-image">
        <img src={image} alt="image" />
      </div>
      <div className="section-text">
        <div className="section-text-subtitle">
          {subtitle}
        </div>
        <div className="section-text-description">
          {text}
        </div>
      </div>
    </section>
  )
}
export default Section