const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 shadow-lg rounded text-center">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    )
}

  export default FeatureCard;