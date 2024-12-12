const CharacterCard = ({ name, dragon, power }) => (
    <div className="border p-4 rounded bg-white">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>Dragão: {dragon}</p>
        <p>Poder: {power}</p>
    </div>
);
export default CharacterCard;
