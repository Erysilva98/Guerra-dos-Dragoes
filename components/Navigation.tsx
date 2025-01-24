"use client";

import { Flame, Users, Scroll } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Início", icon: Flame },
    { id: "characters", label: "Personagens", icon: Users },
    { id: "story", label: "História", icon: Scroll },
  ];

  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-start h-16 gap-8">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                ${
                  activeSection === id
                    ? "text-amber-500 bg-gray-800"
                    : "text-gray-400 hover:text-gray-200"
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}