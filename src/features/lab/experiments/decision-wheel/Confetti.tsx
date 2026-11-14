
const COLORS = [
    "#35D6D0",
    "#6EA8FE",
    "#A78BFA",
    "#F472B6",
    "#F59E0B",
    "#4ADE80",
];

const pieces = Array.from({ length: 36 }, (_, index) => ({
    id: index,
    left: `${(index * 37) % 100}%`,
    delay: `${(index % 8) * 100}ms`,
    color: COLORS[index % COLORS.length],
    size: `${6 + (index % 5) * 2}px`,
}));

export default function Confetti() {
    return (
        <div className="confetti-container" aria-hidden="true">
            {pieces.map((piece) => (
                <span
                    key={piece.id}
                    className="confetti-piece"
                    style={{
                        left: piece.left,
                        animationDelay: piece.delay,
                        backgroundColor: piece.color,
                        width: piece.size,
                        height: piece.size,
                    }}
                />
            ))}
        </div>
    );
}
