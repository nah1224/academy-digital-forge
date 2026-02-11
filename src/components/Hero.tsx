import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden bg-slate-50">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -right-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full text-blue-600 text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Elevate Your Engineering Journey</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Master the Future of <span className="text-blue-600">Science & Tech</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Interactive simulations, expert-led courses, and a community of innovators. Join Brainful Hub today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/auth"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200"
              >
                Start Learning Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm"
              >
                Browse Courses
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-8 text-slate-500">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                <span className="font-medium">10+ Premium Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cpu className="h-5 w-5 text-indigo-500" />
                <span className="font-medium">Live Simulations</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1560c0a-f71a-4374-b57c-5781f645179d/hero-background-b02c0da1-1770830055594.webp"
                alt="Brainful Hub Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            
            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
            >
              <p className="text-3xl font-bold text-blue-600">5k+</p>
              <p className="text-slate-500 font-medium">Active Students</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};