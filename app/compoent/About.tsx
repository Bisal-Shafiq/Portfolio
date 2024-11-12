'use client';

export default function About() {
  const downloadCV = () => {
    // Here, you can link directly to the PDF file for downloading
    const cvUrl = "/Bisal_Shafiq_Resume.pdf"; // Replace this with the actual URL of your PDF
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = "Bisal_Shafiq_Resume.pdf"; // Specify the default filename for the downloaded CV
    link.click();
  };

  return (
    <section id="about" className="about">
      <div className="aboutContent">
        <div className="imageContainer">
          {/* Using the Next.js Image component */}
          <img src="/pic.jpg" alt="Bisal Shafiq" className="aboutImage" />
        </div>
        <div className="textContainer">
          <h1>Hi, I am Bisal Shafiq</h1>
          <p className="rotatingText">
            <span>Frontend Developer</span>
            <span>Web Designer</span>
            <span>App Designer</span>
            <span>UI/UX Designing</span>
          </p>
          <p className="aboutParagraph">
            My skills include frontend development, web design, app design, and UI/UX designing, where I create excellent and engaging experiences for users. 
            I utilize creative solutions and technical expertise to successfully complete projects.
          </p>
          {/* Buttons */}
          <div className="buttonContainer">
            {/* View CV Button */}
            <button onClick={() => window.open("https://editable-resume-builder-inky.vercel.app/", "_blank")} className="viewCVButton">
              View CV
            </button>
            {/* Download CV Button */}
            <button onClick={downloadCV} className="downloadCVButton">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
