
const PricingCard = ({ plan, price, features }) => {
    return (
        <div className="bg-white p-6 shadow rounded">
            <h3 className="text-2xl font-bold mb-2">{plan}</h3>
            <p className="text-4xl font-bold mb-4">{price}</p>
            <ul className="mb-6">
                {features.map((feature, index) => (
                <li key={index} className="mb-2">
                    ✔️ {feature}
                </li>
                ))}
            </ul>
            <button className="bg-cyan-600 text-white px-6 py-3 rounded hover:bg-cyan-700">
                Choose Plan
            </button>
        </div>
    );
}

export default PricingCard;