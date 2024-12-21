import FeatureCard from "./FeatureCard";
import PricingCard from "./PricingCard";

const Home = () => {
    return (
      <div className="font-sans">
        
        <header className="bg-cyan-600 text-white py-4 px-8">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">ByteBox</h1>
            <nav>
              <ul className="flex space-x-4 text-lg">
                <li>
                  <a href="#features" className="">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
  
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to ByteBox</h2>
            <p className="text-lg mb-8">
              Store, share, and manage your files effortlessly.
            </p>
            <button className="bg-cyan-600 text-white px-6 py-3 rounded shadow hover:bg-cyan-700">
              Get Started
            </button>
          </div>
        </section>
  
        <section id="features" className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
              <FeatureCard
                icon="📂"
                title="File Storage"
                description="Securely store all your files with ease."
              />
              <FeatureCard
                icon="🔗"
                title="Easy Sharing"
                description="Share files with your team in just a few clicks."
              />
              <FeatureCard
                icon="📈"
                title="Analytics"
                description="Track your storage usage and activity."
              />
            </div>
          </div>
        </section>
  
        <section id="pricing" className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
              <PricingCard
                plan="Free"
                price="$0"
                features={["5 GB Storage", "Basic Sharing", "Email Support"]}
              />
              <PricingCard
                plan="Pro"
                price="$9.99/mo"
                features={["1 TB Storage", "Advanced Sharing", "Priority Support"]}
              />
              <PricingCard
                plan="Enterprise"
                price="Contact Us"
                features={[
                  "Unlimited Storage",
                  "Custom Features",
                  "24/7 Support",
                ]}
              />
            </div>
          </div>
        </section>
  
        <footer id="contact" className="bg-cyan-600 text-white py-8">
          <div className="container mx-auto text-center">
            <p className="mb-4">© 2024 ByteBox. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  };

  export default Home;