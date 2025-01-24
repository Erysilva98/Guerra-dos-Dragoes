"use client";

interface StoryCardProps {
  title: string;
  description: string;
  image: string;
}

export default function StoryCard({ title, description, image }: StoryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      </div>
      <div className="relative p-8 min-h-[300px] flex flex-col justify-end">
        <h3 className="text-2xl font-bold mb-2 text-amber-500">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
}