function NosServices() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20">
        {/* Glassmorphic background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/40 dark:bg-teal-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-40 backdrop-blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300/30 dark:bg-teal-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 backdrop-blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-100/20 dark:bg-teal-500/8 rounded-full mix-blend-multiply filter blur-3xl opacity-20 backdrop-blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white animate-fade-in-up" style={{animationDelay: '0s'}}>
            Nos Services
          </h1>
        </div>
      </section>
    </div>
  );
}

export default NosServices;
