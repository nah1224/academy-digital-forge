export const SimulationSample = () => {
  return (
    <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 mt-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Today's Sample Simulation</h3>
          <p className="text-slate-600">The Double Pendulum: Chaotic Motion</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">
          Full Screen
        </button>
      </div>
      <div className="bg-slate-900 aspect-video rounded-xl flex items-center justify-center text-white/50 border border-slate-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" />
          <p>Initializing Simulation Environment...</p>
        </div>
      </div>
    </div>
  );
};