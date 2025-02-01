function Navbar() {
  return (
    <nav className="bg-gradient-to-r my-8 from-blue-500 to-indigo-600 rounded py-4 px-6 md:px-12 shadow-md">
      <div className="max-w-7xl  mx-auto flex gap-2 flex-col items-center justify-between">
        {/* Website Logo & Name */}
        <div className="flex items-center">
          <span className="text-3xl mr-2">📝</span>
          <h1 className="text-2xl font-bold text-white">Noted Task</h1>
        </div>
        {/* Website Description */}
        <p className="mt-2 md:mt-0 text-white text-sm">
          Your daily productivity companion. Organize, track, and conquer your
          tasks effortlessly!
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
