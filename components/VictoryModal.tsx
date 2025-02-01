"use client";

interface VictoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VictoryModal({ isOpen, onClose }: VictoryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl shadow-lg max-w-md text-center text-white border border-gray-700">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">
          🎉 Parabéns! 🎉
        </h2>
        <p className="text-gray-300 mb-4">Você venceu o jogo!</p>
        <button
          onClick={onClose}
          className="group relative px-6 py-3 bg-gradient-to-r from-red-700 to-amber-700 rounded-lg text-xl font-bold transition-all hover:scale-105"
        >
          <span className="relative z-10">OK</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-amber-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </div>
  );
}
