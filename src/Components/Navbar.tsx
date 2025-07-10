import { Settings, User, Zap, Target } from 'lucide-react';


const Navbar: React.FC = () => {
  return (
    <>
      <header className="relative z-20 bg-gray-900/90 backdrop-blur-lg border-b  border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-xl font-bold">AIChessTutor</span>
              </div>


            </div>
            <nav className="hidden md:flex items-center space-x-6 gap-10">

              <span className="text-emerald-400 flex items-center space-x-2 cursor-pointer">
                <Target size={18} />
                <span>Play</span>
              </span>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white transition-colors">
                <Settings size={20} />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>



    </>
  );
};


export default Navbar
