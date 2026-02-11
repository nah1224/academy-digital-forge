import { motion } from 'framer-motion';
import { Maximize2, RotateCcw, Play } from 'lucide-react';

export const SimulationPreview = () => {
  return (
    <section id="simulations" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Interactive Simulations
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience theory in action with our state-of-the-art interactive modules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative group rounded-3xl overflow-hidden border-8 border-white shadow-2xl aspect-video bg-slate-900">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1560c0a-f71a-4374-b57c-5781f645179d/simulation-preview-548376b1-1770830061753.webp"
                alt="Simulation"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/90 backdrop-blur text-blue-600 p-6 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center space-x-2 font-bold">
                  <Play className="h-6 w-6 fill-current" />
                  <span>Try Demo</span>
                </button>
              </div>
              
              {/* Fake UI Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="h-2 w-24 bg-white/30 rounded-full" />
                  <div className="h-2 w-12 bg-blue-500 rounded-full" />
                </div>
                <div className="flex space-x-3 text-white/70">
                  <RotateCcw className="h-5 w-5" />
                  <Maximize2 className="h-5 w-5" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {[
              { title: 'Real-time Physics', desc: 'Precise engine for complex mechanical systems.' },
              { title: '3D Visualizer', desc: 'Interact with mathematical concepts in space.' },
              { title: 'Code Runtime', desc: 'Execute and debug C++ snippets instantly.' }
            ].map((feature, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="mt-1 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <div className="h-2 w-2 bg-blue-600 rounded-full" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{feature.title}</h4>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};