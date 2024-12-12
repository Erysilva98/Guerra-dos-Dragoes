const Header = () => (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-lg font-bold">Guerra dos Dragões</h1>
        <nav>
            <a href="/" className="mr-4">Home</a>
            <a href="/about" className="mr-4">Sobre</a>
            <a href="/game">Jogar</a>
        </nav>
    </header>
);
export default Header;
