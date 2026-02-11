import { Brain, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Brainful Hub</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Empowering the next generation of engineers and thinkers through immersive digital education.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">All Courses</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Simulations</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-all">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-slate-500">
              Subscribe to our newsletter for updates.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Brainful Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};