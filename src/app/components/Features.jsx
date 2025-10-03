import './Features.css';

export default function Features() {
  const featureItems = [
    {
      title: "Instant Access to Vetted Professionals",
      description: "Connect with verified clearing agents and truck drivers in real-time.",
      image: "https://raw.githubusercontent.com/MuskanBasharat/asstes_offiiss/refs/heads/main/verify.jpeg",
    },
    {
      title: "Direct Communication & Live Updates",
      description: "Chat, call, and track deliveries all within the app.",
      image: "https://raw.githubusercontent.com/MuskanBasharat/asstes_offiiss/refs/heads/main/email.jpg",
    },
    {
      title: "Safe, Transparent, and Cashless",
      description: "No middlemen. No hidden fees. Pay securely through the platform.",
      image: "https://raw.githubusercontent.com/MuskanBasharat/asstes_offiiss/refs/heads/main/coin.jpeg",
    },
  ];

  return (
    <section className="features">
      <div className="max-w-6xl mx-auto grid grid-cols-1 card-section-feature px-8">
        {featureItems.map((item, idx) => (
          <div key={idx} className="card">
            <img src={item.image} alt={item.title} className="icons" />
            <h3 className="heading">{item.title}</h3>
            <p className="text-card">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
