import { motion } from 'framer-motion';
import { BookOpen, Play, Award, Settings, Search, Bell } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome back, Student!</h1>
            <p className="text-slate-600 mt-1">You've completed 65% of your Weekly Goal.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <button className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors relative">
              <Bell className="h-5 w-5 text-slate-600" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <Play className="h-5 w-5 mr-2 text-blue-600" />
                Continue Learning
              </h2>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6">
                <div className="w-32 h-24 bg-blue-100 rounded-xl overflow-hidden flex-shrink-0">
                   <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1560c0a-f71a-4374-b57c-5781f645179d/pre-engineering-course-6c2a50de-1770830056451.webp" alt="Course" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Advanced Mechanics Simulation</h3>
                  <div className="w-full bg-slate-100 h-2 rounded-full mb-2">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4" />
                  </div>
                  <p className="text-sm text-slate-500">75% Complete • Lesson 14 of 20</p>
                </div>
                <button className="hidden sm:block px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
                  Resume
                </button>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-6">Recent Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Bridge Stress Analysis', date: '2 days ago', status: 'Completed' },
                  { title: 'Vector Calculus Sim', date: '5 days ago', status: 'In Progress' },
                ].map((project, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-200 transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {project.status.toUpperCase()}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">{project.title}</h4>
                    <p className="text-xs text-slate-500">Last edited {project.date}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <Award className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Pro Member</h3>
                <p className="text-slate-400 text-sm mb-6">Access all premium simulations and certificates.</p>
                <button className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all">
                  Upgrade Plan
                </button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -mr-16 -mt-16" />
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Study Schedule</h3>
              <div className="space-y-4">
                {[
                  { time: '14:00', task: 'C++ Memory Management', color: 'bg-blue-500' },
                  { time: '16:30', task: 'Physics Lab Simulation', color: 'bg-indigo-500' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="text-sm font-bold text-slate-400 w-12">{item.time}</div>
                    <div className="flex-1 p-3 rounded-xl bg-slate-50 border-l-4 border-l-blue-600">
                      <p className="text-sm font-bold text-slate-700">{item.task}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};