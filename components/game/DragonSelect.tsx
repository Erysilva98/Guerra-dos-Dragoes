"use client";

import { useState } from "react";
import { dragons } from "@/lib/game/data";

interface DragonSelectProps {
  onSelect: (dragonId: string) => void;
}

export default function DragonSelect({ onSelect }: DragonSelectProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {dragons.map((dragon) => (
        <div
          key={dragon.id}
          className={`
            p-4 rounded-lg border-2 cursor-pointer transition-all
            ${
              selected === dragon.id
                ? "border-amber-500 bg-gray-800"
                : "border-gray-700 bg-gray-800/50 hover:border-gray-500"
            }
          `}
          onClick={() => {
            setSelected(dragon.id);
            onSelect(dragon.id);
          }}
        >
          <img
            src={dragon.image}
            alt={dragon.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold mb-2">{dragon.name}</h3>
          <p className="text-gray-400 text-sm mb-3">{dragon.description}</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-amber-500">Power:</span>
              <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500"
                  style={{ width: `${dragon.stats.power}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-green-500">Speed:</span>
              <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${dragon.stats.speed}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}