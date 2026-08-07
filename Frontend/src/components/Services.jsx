import {
  Globe,
  ShoppingCart,
  BarChart3,
  Palette,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    icon: <Globe size={40} />,
    description: "Modern React and business websites.",
  },
  {
    title: "Shopify Development",
    icon: <ShoppingCart size={40} />,
    description: "Custom Shopify stores and theme development.",
  },
  {
    title: "Data Analytics",
    icon: <BarChart3 size={40} />,
    description: "Excel dashboards and business reporting.",
  },
  {
    title: "Graphic Design",
    icon: <Palette size={40} />,
    description: "Professional social media and branding designs.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-800 rounded-xl p-8 hover:scale-105 transition"
            >
              <div className="text-blue-500">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}