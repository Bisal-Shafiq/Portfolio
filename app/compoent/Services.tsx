// Services.tsx
export default function Services() {
  const services = [
    { 
      title: "Frontend Development", 
      description: "Building responsive websites.", 
      image: "/code.png" // Added image path
    },
    { 
      title: "UI/UX Design", 
      description: "Designing user-friendly interfaces.", 
      image: "/uiux.png" // Added image path
    },
    { 
      title: "Website Designing", 
      description: "Creating mobile apps for iOS and Android.",
      image: "/web.png" // Added image path
    },
    { 
      title: "App Designing", 
      description: "Creating mobile apps for iOS and Android.",
      image: "/app.png" // Added image path
    },

  ];

  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="cardsContainer">
        {services.map((service, index) => (
          <div key={index} className="card">
            <img src={service.image} alt={service.title} className="card-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
