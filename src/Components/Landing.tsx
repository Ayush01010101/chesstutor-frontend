import React from 'react';
import { ChevronRight, Mic, Upload, LineChart, Book } from 'lucide-react';
import { GreenGrediantButton } from './CustomButtons/GreenGrediantButton';
import { BlackAlphaButton } from './CustomButtons/BlackAlphaButton';
const Landing: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black  ">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 ">
        <div className="absolute  top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Chess board pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10 ">
        <div className="flex  w-[86%] m-auto flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-300  p-2">
              Elevate Your Chess Game With AI Analysis
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              Import PGN files or connect your chess account for deep, voice-assisted analysis that helps you understand your games like never before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <GreenGrediantButton
              text={<>Start Now  <ChevronRight className="ml-2" size={20} /></>}
              handleclick={()=>{
                
              }}
              />
              
              <BlackAlphaButton
              text={<>Learn More <Book className='ml-2' size={20}/></>}
              handleclick={()=>{}}
              
              />
            </div>

            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 "></div>
                ))}
              </div>
              <p className="text-gray-400">
                <span className="text-emerald-400 font-medium">2,500+</span> chess players trust us
              </p>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl transform -rotate-6"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="bg-black/80 p-4 rounded-lg mb-6 flex items-center">
                  <Upload className="text-emerald-400 mr-3" />
                  <p className="text-white">Upload PGN or connect account</p>
                </div>
                
                <div className="bg-black/80 p-4 rounded-lg mb-6 flex items-center">
                  <LineChart className="text-emerald-400 mr-3" />
                  <p className="text-white">AI analyzes your games & strategies</p>
                </div>
                
                <div className="bg-black/80 p-4 rounded-lg flex items-center">
                  <Mic className="text-emerald-400 mr-3" />
                  <p className="text-white">Get voice explanations of your games</p>
                </div>
                
                <div className="mt-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg p-4 border border-white/10">
                  <p className="text-emerald-300 font-medium mb-2">AI Analysis Example:</p>
                  <p className="text-gray-300 text-sm">
                    "Your knight move to e5 created a strong outpost. Consider developing your light-square bishop next to increase pressure on the kingside."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;