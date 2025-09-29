import './Features.css';

export default function Features() {
  const featureItems = [
    {
      title: "Instant Access to Vetted Professionals",
      description: "Connect with verified clearing agents and truck drivers in real-time.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGhJFYLzVK1lxwWCEWKnzwIWQEbQuM0OODhw&s",
    },
    {
      title: "Direct Communication & Live Updates",
      description: "Chat, call, and track deliveries all within the app.",
      image: "https://static.vecteezy.com/system/resources/previews/004/532/089/non_2x/new-email-notification-3d-icon-3d-realistic-email-icon-3d-email-vector.jpg",
    },
    {
      title: "Safe, Transparent, and Cashless",
      description: "No middlemen. No hidden fees. Pay securely through the platform.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzhXcy5UlQ4Qluc2oocd8AtEKHBzbgFdJvQ&s",
    },
  ];

  return (
    <section className="features">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 px-8">
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
