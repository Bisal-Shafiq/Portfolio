// Contact.tsx

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <div className="contactContainer">
        
        {/* Large Image on the left */}
        <div className="leftImageContainer">
          <img src="/contactus.png" alt="Profile" className="profileImage" />
        </div>

        {/* Contact Information and Icons */}
        <div className="infoWrapper">
          <div className="contactInfo">
            <h2>Bisal Shafiq</h2>
            <h4>Email:</h4> <p>bisalshafiq4@gmail.com</p><br/>
            <h4>Phone:</h4><p> +92335-2529815 | +92319-3893190</p>
          </div>
          
          <div className="logoImages">
            <a href="https://linkedin.com/in/bisal-shafique-309405308" target="_blank" rel="noopener noreferrer">
              <img src="/in.png" alt="LinkedIn" className="logoIcon" />
            </a>
            <a href="https://github.com/Bisal-Shafiq" target="_blank" rel="noopener noreferrer">
              <img src="/git.png" alt="GitHub" className="logoIcon" />
            </a>
            <a href="https://www.instagram.com/bisalshafiq?igsh=ZHRra2NnZ3dyMWo4" target="_blank" rel="noopener noreferrer">
              <img src="/insta.png" alt="Instagram" className="logoIcon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61558179863833" target="_blank" rel="noopener noreferrer">
              <img src="/fb.png" alt="Facebook" className="logoIcon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
