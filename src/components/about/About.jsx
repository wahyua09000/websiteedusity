import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} className='about-img' />
        <img src={play_icon} className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quos dolor commodi deserunt sit itaque porro minus, quidem nemo laborum voluptas velit optio, aliquam provident ducimus officiis. Vel sit doloribus perspiciatis nostrum, dolorum reprehenderit aut praesentium corrupti ullam. Ducimus qui ullam voluptate aperiam dolore, doloribus optio ex sint corporis molestiae?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, molestiae. Laudantium assumenda quas deleniti tenetur. Quaerat ea eveniet consectetur ipsa? Voluptate odit, sequi inventore rem expedita blanditiis perspiciatis sapiente eius?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, delectus quo obcaecati tempora nihil sapiente quisquam ullam accusantium! Nemo veritatis asperiores at cupiditate cum eveniet aliquam eius officia natus? Cum?</p>
      </div>
    </div>
  )
}

export default About
