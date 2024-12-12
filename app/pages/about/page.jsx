
export default function AboutPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">Sobre o Jogo</h1>
            <p className="mt-4">
                O reino de Westeros está em guerra. Como aliado de Rhaenyra Targaryen, você
                deve derrotar a facção Hightower e apoiar a legítima herdeira ao trono.
            </p>
            <ul className="mt-4 list-disc ml-6">
                <li>Protagonista: Você é um aliado de Rhaenyra Targaryen.</li>
                <li>Antagonistas: A facção "verde" da casa Hightower apoia Aegon Targaryen.</li>
            </ul>
        </div>
    );
}
