export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold">Guerra dos Dragões</h1>
      <p className="mt-4 text-lg">
        Ajude Rhaenyra Targaryen a defender o trono contra seus inimigos!
      </p>
      <div className="mt-6">
        <a href="/pages/about" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Sobre o Jogo</a>
        <a href="/pages/game" className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Jogar</a>
      </div>
    </div>
  );
}
