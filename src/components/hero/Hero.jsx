import './Hero.css'
import panah from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skilss, and experinces needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore more <img src={panah} /></button>
      </div>
    </div>
  )
}

export default Hero
