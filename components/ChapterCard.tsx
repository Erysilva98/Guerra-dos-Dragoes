"use client";

import { ChevronRight } from "lucide-react";

interface ChapterCardProps {
  title: string;
  description: string;
  image: string;
  onPlay?: () => void;
}

export default function ChapterCard({ title, description, image, onPlay }: ChapterCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-800 border border-gray-700 transition-all hover:border-amber-500/50">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-amber-500">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <button
          className="flex items-center gap-2 text-sm font-medium text-amber-500 group-hover:text-amber-400"
          onClick={onPlay}
        >
          Jogar Capítulo
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}