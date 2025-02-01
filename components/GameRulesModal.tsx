"use client";

interface GameRulesModalProps {
  onClose: () => void;
}

export default function GameRulesModal({ onClose }: GameRulesModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl shadow-lg max-w-md text-center text-white border border-gray-700">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          Regras do Jogo
        </h2>
        <p className="text-gray-300 mb-4">
          Sobreviva aos ataques dos dragões inimigos, utilize suas habilidades especiais e conquiste reinos!
        </p>
        <p className="text-gray-300 mb-4">
          <span className="font-bold text-red-500">-</span> Mova o dragão para cima e para baixo usando as setas do teclado.
        </p>
        <p className="text-gray-300 mb-4">
          <span className="font-bold text-red-500">-</span> Cuspir fogo para se defender pressionando <span className="font-bold text-amber-500">SPACE</span>.
        </p>
        <p className="text-gray-300 mb-6">
          <span className="font-bold text-red-500">-</span> Para sair do jogo, pressione <span className="font-bold text-amber-500">ESC</span>.
        </p>
        <button
          onClick={onClose}
          className="group relative px-6 py-3 bg-gradient-to-r from-red-600 to-amber-600 rounded-lg text-xl font-bold transition-all hover:scale-105"
        >
          <span className="relative z-10">Jogar!</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-amber-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </div>
  );
}