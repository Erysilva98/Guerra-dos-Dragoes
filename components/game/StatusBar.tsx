"use client";

import { Shield, Heart, Flame, Swords } from "lucide-react";

export default function StatusBar() {
  return (
    <div className="absolute top-4 left-4 right-4 flex items-center gap-8 bg-gray-900/80 p-4 rounded-lg">
      <div className="flex items-center gap-2">
        <Heart className="w-6 h-6 text-red-500" />
        <div className="w-32 h-4 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-red-500 w-[75%]" />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Shield className="w-6 h-6 text-blue-500" />
        <div className="w-32 h-4 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 w-[50%]" />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Flame className="w-6 h-6 text-amber-500" />
        <div className="w-32 h-4 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-amber-500 w-[90%]" />
        </div>
      </div>
      
      <div className="flex items-center gap-2 ml-auto">
        <Swords className="w-6 h-6 text-purple-500" />
        <span className="text-xl font-bold">0</span>
      </div>
    </div>
  );
}