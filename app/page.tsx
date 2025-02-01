"use client";

import { SetStateAction, useState, useEffect } from "react";
import { Flame, ChevronRight, ChevronLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import CharacterCard from "@/components/CharacterCard";
import StoryCard from "@/components/StoryCard";
import ChapterCard from "@/components/ChapterCard";
import { characters, chapters, stories } from "@/lib/data";
import GameCanvas from "@/components/game/GameCanvas";
import GameRulesModal from "@/components/GameRulesModal";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [selectedDragonType, setSelectedDragonType] = useState<string | null>(null);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    if (activeSection === "game") {
      setShowRules(true);
    }
  }, [activeSection]);

  const handleNavigate = (section: SetStateAction<string>) => {
    setActiveSection(section);
  };

  const handlePlayChapter = (chapterId: string) => {
    setSelectedChapter(chapterId);
    setSelectedDragonType(chapterId);
    setActiveSection("game");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {showRules && <GameRulesModal onClose={() => setShowRules(false)} />}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <div className="container mx-auto px-4 py-16">
        {activeSection === "home" && (
          <section className="text-center">
            <div className="relative mb-12">
              <div className="absolute inset-0 flex items-center justify-center blur-3xl opacity-20">
                <Flame className="w-96 h-96 text-red-500" />
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-amber-500 text-transparent bg-clip-text">
                Bem-vindo ao Reino dos Dragões
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Embarque em uma jornada épica através dos Sete Reinos, onde dragões dominam os céus e batalhas definem o destino de Westeros.
              </p>
              <button
                onClick={() => handleNavigate("chapters")}
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 rounded-lg text-xl font-bold transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Iniciar Jogo
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-amber-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </section>
        )}
        {activeSection === "chapters" && (
          <section>
            <h2 className="text-4xl font-bold mb-8 text-center text-amber-500">Escolha um Capítulo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {chapters.map((chapter) => (
                <ChapterCard
                  key={chapter.id}
                  {...chapter}
                  onPlay={() => handlePlayChapter(chapter.id)}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => handleNavigate("home")}
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 rounded-lg text-xl font-bold transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Voltar ao Início
                  <ChevronLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-amber-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </section>
        )}
        {activeSection === "characters" && (
          <section>
            <h2 className="text-4xl font-bold mb-8 text-center text-amber-500">Dragões Lendários</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {characters.map((character) => (
                <CharacterCard key={character.id} {...character} />
              ))}
            </div>
          </section>
        )}
        {activeSection === "story" && (
          <section>
            <h2 className="text-4xl font-bold mb-8 text-center text-amber-500">Saga dos Dragões</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stories.map((story) => (
                <StoryCard key={story.id} {...story} />
              ))}
            </div>
          </section>
        )}
        {activeSection === "game" && selectedDragonType && !showRules && (
          <GameCanvas dragonType={selectedDragonType} />
        )}
      </div>
    </main>
  );
}
