"use client";

import { Flame, Wind } from "lucide-react";

interface CharacterCardProps {
  name: string;
  description: string;
  image: string;
  stats: {
    power: number;
    speed: number;
  };
}

export default function CharacterCard({ name, description, image, stats }: CharacterCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-800 border border-gray-700 transition-all hover:border-amber-500/50">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-amber-500">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-red-500" />
            <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500 transition-all"
                style={{ width: `${stats.power}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-5 h-5 text-blue-500" />
            <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all"
                style={{ width: `${stats.speed}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}