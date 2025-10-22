import { StarBackground } from "@/components/StarBackground/StarBackground";
import { Navbar } from "@/layout/Navbar/Navbar";
import { Footer } from "@/layout/Footer/Footer";
import { Smartphone, Monitor, Globe, Layers } from "lucide-react";

export const Application = () => {
  const applications = [
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Web Applications",
      description:
        "Modern, responsive web applications built with the latest technologies and best practices.",
      features: ["React & Vue.js", "Progressive Web Apps", "Real-time Features"],
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile Development",
      description:
        "Cross-platform mobile applications that deliver native-like experiences.",
      features: ["React Native", "iOS & Android", "Offline Support"],
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Full-Stack Solutions",
      description:
        "End-to-end application development from frontend to backend infrastructure.",
      features: ["REST APIs", "Database Design", "Cloud Deployment"],
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Enterprise Systems",
      description:
        "Scalable enterprise-grade applications with advanced features and integrations.",
      features: ["Microservices", "Authentication", "Analytics"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />

      <main className="pt-24">
        <section className="py-24 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Application <span className="text-primary">Development</span>
            </h2>

            <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              I specialize in building custom applications tailored to your business needs.
              From web to mobile, I deliver solutions that are scalable, secure, and user-friendly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-lg shadow-xs card-hover"
                >
                  <div className="p-4 rounded-full bg-primary/10 w-fit mb-6">
                    {app.icon}
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 text-left">
                    {app.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-left">
                    {app.description}
                  </p>

                  <ul className="space-y-2">
                    {app.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-foreground/80"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-12 rounded-xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Build Your Application?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create something amazing together.
              </p>
              <a href="/contact" className="cosmic-button inline-block">
                Start a Project
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
