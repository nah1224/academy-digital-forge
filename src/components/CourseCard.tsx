import { motion } from 'framer-motion';
import { Play, Clock, Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  duration: string;
  price?: string;
}

export const CourseCard = ({ title, description, image, category, rating, duration }: CourseCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="p-3 bg-blue-600 rounded-full text-white transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="h-6 w-6 fill-current" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`}
            />
          ))}
          <span className="text-sm text-slate-500 font-medium ml-2">{rating}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-slate-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span className="text-xs font-medium">{duration}</span>
          </div>
          <button className="text-blue-600 font-bold text-sm hover:underline">
            View Sample
          </button>
        </div>
      </div>
    </motion.div>
  );
};