import { Globe, Link2 } from "lucide-react"
import type { ReactNode } from "react"
import { useState } from "react"
const LinkChessaccount =():ReactNode=>{
    const [accountValue,setAccountvalue]=useState<string>('')
    return (
     
         
              <div className="bg-gray-900/50 backdrop-blur-lg border h-1/2 border-white/10 rounded-2xl p-6 mb-6 w-full md:w-1/3 ">
                <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                  <Link2 className="w-5 h-5 mr-2 text-emerald-400" />
                  Account Integration
                </h3>

               
                  <div className="space-y-4">
                    {/* Chess.com Connection */}
                    <div className="bg-black/40 rounded-lg p-4 border border-white/5">
                      <div className="flex items-center mb-3">
                        <Globe className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-white font-medium">Chess.com</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter username"
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setAccountvalue(e.target.value)}
                        value={accountValue}
                        className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent mb-3"
                      />
                      <button
                        
                        className={`w-full transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg flex items-center justify-center text-sm ${!accountValue ? 'cursor-not-allowed bg-gray-600' : 'bg-green-600 cursor-pointer'} `}
                      >
                        Connect
                   
                      </button>
                    </div>

                    
                  </div>
                </div>
            
       
    )
    }


export {
    LinkChessaccount
}