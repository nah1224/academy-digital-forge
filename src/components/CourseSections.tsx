import { CourseCard } from './CourseCard';

const courses = [
  {
    title: 'Pre-engineering Mastery',
    description: 'Comprehensive foundation in mechanics, thermodynamics, and electronics for aspiring engineers.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1560c0a-f71a-4374-b57c-5781f645179d/pre-engineering-course-6c2a50de-1770830056451.webp',
    category: 'Engineering',
    rating: 4.9,
    duration: '24 Hours'
  },
  {
    title: 'Applied Mathematics',
    description: 'Master complex calculus, linear algebra, and differential equations with practical applications.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1560c0a-f71a-4374-b57c-5781f645179d/applied-maths-course-8e99b268-1770830057034.webp',
    category: 'Mathematics',
    rating: 4.8,
    duration: '18 Hours'
  },
  {
    title: 'Advanced C++ Concepts',
    description: 'Deep dive into memory management, STL, and low-level optimization techniques.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1560c0a-f71a-4374-b57c-5781f645179d/c---programming-course-468677d1-1770830056263.webp',
    category: 'Computer Science',
    rating: 4.9,
    duration: '32 Hours'
  }
];

export const CourseSections = () => {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Professional Courses
            </h2>
            <p className="text-lg text-slate-600">
              Curated paths designed to take you from foundational concepts to advanced technical mastery.
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg font-semibold text-slate-700 transition-colors">
              Filter
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              All Courses
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};