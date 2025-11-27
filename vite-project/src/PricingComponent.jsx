
import React from "react";

const PricingComponent = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: [
        "Access to basic modules",
        "Community support",
        "Limited project templates",
      ],
      buttonText: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      features: [
        "Everything in Free",
        "Full course access",
        "Downloadable resources",
        "Certificate of completion",
      ],
      buttonText: "Upgrade to Pro",
      highlighted: true,
    },
    {
      name: "Pro Plus",
      price: "$49",
      period: "/month",
      features: [
        "Everything in Pro",
        "1-on-1 mentoring",
        "Portfolio review",
        "Exclusive project templates",
        "Private Slack group",
      ],
      buttonText: "Join Pro Plus",
      highlighted: false,
    },
  ];

  return (
    <div className="pricing-container">
      <h2 className="title">Choose Your Plan</h2>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card ${plan.highlighted ? "highlighted" : ""}`}
          >
            <h3>{plan.name}</h3>
            <p className="price">
              {plan.price}
              <span>{plan.period}</span>
            </p>
            <ul>
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className="pricing-button">{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;
