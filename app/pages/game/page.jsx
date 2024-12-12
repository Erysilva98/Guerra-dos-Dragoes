import GameBoard from '../../components/GameBoard';

export default function GamePage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">Guerra dos Dragões</h1>
            <GameBoard />
        </div>
    );
}
