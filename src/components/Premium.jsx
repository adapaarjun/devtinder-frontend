import axios from "axios";
import BASE_URL from "../utils/constants";

const PremiumPlans = () => {
  const plans = [
    {
      name: "Bronze",
      price: "99",
      description: "Perfect for getting started",
      icon: "🥉",
      border: "border-orange-700",
      features: [
        "10 connection requests per day",
        "View developer profiles",
        "Basic profile visibility",
        "Standard support",
      ],
    },
    {
      name: "Silver",
      price: "199",
      description: "For developers who want more",
      icon: "🥈",
      border: "border-gray-400",
      features: [
        "30 connection requests per day",
        "See who liked your profile",
        "Priority profile visibility",
        "Advanced developer search",
        "Priority support",
      ],
    },
    {
      name: "Gold",
      price: "299",
      description: "Unlock the complete experience",
      icon: "🥇",
      border: "border-yellow-500",
      popular: true,
      features: [
        "Unlimited connection requests",
        "See who liked your profile",
        "Top profile visibility",
        "Advanced developer search",
        "Exclusive Gold badge",
        "Premium support",
      ],
    },
  ];

  const onCreateOrder = async (type) => {
    try {
      const createOrder = await axios.post(
        BASE_URL + "payment/create",
        {
          memberShipType: type,
        },
        {
          withCredentials: true,
        },
      );

      const {keyId,notes,amount,orderId} = createOrder.data;

      console.log(createOrder);
      
      const options = {
        key: keyId,
        amount, 
        currency: "INR",
        name: "Dev Tinder",
        description: "Application for developers",
        order_id: orderId,
        prefill: {
          name:notes.firstName + " " + notes.lastName,
          email:notes.emailId,
        },
        theme: {
          color: "#F37254",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="badge badge-warning mb-4">DEV TINDER PREMIUM</div>

          <h1 className="text-4xl font-bold md:text-5xl">
            Choose Your Membership
          </h1>

          <p className="mt-4 text-base-content/60">
            Find your developer community and unlock more opportunities.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border-2
                ${plan.border} bg-base-100 p-8 shadow-xl
                transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2
                  -translate-x-1/2 whitespace-nowrap rounded-full
                  bg-yellow-400 px-5 py-2 text-sm font-bold text-black"
                >
                  MOST POPULAR
                </div>
              )}

              {/* Plan Details */}
              <div className="text-center">
                <div className="mb-4 text-5xl">{plan.icon}</div>

                <h2 className="text-2xl font-bold">{plan.name}</h2>

                <p className="mt-2 text-sm text-base-content/60">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="my-8 text-center">
                <span className="text-5xl font-extrabold">₹{plan.price}</span>
                <span className="text-base-content/60">/ month</span>
              </div>

              <div className="divider"></div>

              {/* Features */}
              <ul className="flex-1 space-y-5 py-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="font-bold text-success">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button UI Only */}
              <button
                className={`btn mt-6 w-full rounded-xl ${
                  plan.popular
                    ? "border-yellow-400 bg-yellow-400 text-black hover:bg-yellow-500"
                    : "btn-outline"
                }`}
                onClick={() => onCreateOrder(plan.name)}
              >
                Get {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-12 text-center text-sm text-base-content/50">
          Simple pricing. No hidden charges. Cancel anytime.
        </p>
      </div>
    </div>
  );
};

export default PremiumPlans;
