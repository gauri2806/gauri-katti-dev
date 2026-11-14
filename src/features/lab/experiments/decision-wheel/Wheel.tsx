
import {
    WHEEL_SIZE,
    WHEEL_CENTER,
    WHEEL_RADIUS,
    getPointOnCircle,
    getSegmentPath,
} from "./wheelUtils";

import type { WheelOption } from "./types";

interface WheelProps {
    options: WheelOption[];
    rotation: number;
    isSpinning: boolean;
    onSpinComplete: () => void;
}

const COLORS = [
    "#35D6D0",
    "#6EA8FE",
    "#A78BFA",
    "#F472B6",
    "#F59E0B",
    "#4ADE80",
    "#FB7185",
    "#818CF8",
];

export default function Wheel({
    options,
    rotation,
    isSpinning,
    onSpinComplete,
}: WheelProps) {
    const segmentAngle = 360 / options.length;

    return (
        <div className="relative flex w-full max-w-[420px] items-center justify-center">
            {/* Fixed pointer */}
            <div className="absolute -top-2 left-1/2 z-20 -translate-x-1/2">
                <div
                    className="h-0 w-0 border-x-[14px] border-t-[26px] border-x-transparent border-t-[var(--color-accent)] drop-shadow-lg"
                />
            </div>

            {/* Wheel */}
            <div className="aspect-square w-full rounded-full border-[6px] border-white/10 bg-[#07111d] p-1 shadow-[0_0_60px_rgba(53,214,208,0.08)]">
                <svg
                    viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
                    className="h-full w-full overflow-visible"
                    onTransitionEnd={(event) => {
                        if (
                            event.target === event.currentTarget &&
                            isSpinning &&
                            event.propertyName === "transform"
                        ) {
                            onSpinComplete();
                        }
                    }}
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        transition: isSpinning
                            ? "transform 5s cubic-bezier(0.12, 0.75, 0.15, 1)"
                            : "none",
                    }}
                >
                    {options.map((option, index) => {
                        const startAngle =
                            -90 + index * segmentAngle;

                        const endAngle =
                            startAngle + segmentAngle;

                        const middleAngle =
                            startAngle + segmentAngle / 2;

                        const labelPosition = getPointOnCircle(
                            middleAngle,
                            WHEEL_RADIUS * 0.65
                        );

                        return (
                            <g key={option.id}>
                                <path
                                    d={getSegmentPath(
                                        startAngle,
                                        endAngle
                                    )}
                                    fill={COLORS[index % COLORS.length]}
                                    stroke="#07111d"
                                    strokeWidth="1.5"
                                />

                                <text
                                    x={labelPosition.x}
                                    y={labelPosition.y}
                                    fill="#07111d"
                                    fontSize={
                                        options.length > 10 ? 9 : 11
                                    }
                                    fontWeight="600"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    transform={`rotate(${middleAngle + 90}, ${labelPosition.x}, ${labelPosition.y})`}
                                >
                                    {option.label.length > 13
                                        ? `${option.label.slice(0, 12)}…`
                                        : option.label}
                                </text>
                            </g>
                        );
                    })}

                    {/* Center circle */}
                    <circle
                        cx={WHEEL_CENTER}
                        cy={WHEEL_CENTER}
                        r="22"
                        fill="#07111d"
                        stroke="rgba(255,255,255,0.25)"
                        strokeWidth="2"
                    />

                    <circle
                        cx={WHEEL_CENTER}
                        cy={WHEEL_CENTER}
                        r="7"
                        fill="#35D6D0"
                    />

                    {/* Outer ring */}
                    <circle
                        cx={WHEEL_CENTER}
                        cy={WHEEL_CENTER}
                        r={WHEEL_RADIUS}
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="2"
                    />
                </svg>
            </div>
        </div>
    );
}
