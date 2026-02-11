import { Hero } from '../components/Hero';
import { CourseSections } from '../components/CourseSections';
import { SimulationPreview } from '../components/SimulationPreview';
import { SimulationSample } from '../components/SimulationSample';

export const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <SimulationSample />
      </div>
      <CourseSections />
      <SimulationPreview />
      
      {/* Testimonials or Stats Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted by students worldwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold mb-2">95%</p>
              <p className="text-blue-100">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">12k+</p>
              <p className="text-blue-100">Active Students</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-blue-100">Live Simulations</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-blue-100">Expert Support</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};