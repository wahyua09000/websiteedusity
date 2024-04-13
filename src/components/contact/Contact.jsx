import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useState } from 'react'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f68ca879-ef22-4abb-a3e5-07b299bcb521");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a massage <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis quidem quod? Id obcaecati nobis fugit vero, iure suscipit minus inventore modi architecto voluptatibus sit, maiores unde quaerat officiis provident blanditiis repellat, quos perferendis. Eum doloremque porro iste ab cumque?</p>
        <ul>
            <li><img src={mail_icon} alt="" /> Contact@mail.dev</li>
            <li><img src={phone_icon} alt="" /> +62 895-6271-0406-6</li>
            <li><img src={location_icon} alt="" /> Pasuruan, East Java<br/> Gempol</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter Your Massage' required></textarea>
            <button type="submit" className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
