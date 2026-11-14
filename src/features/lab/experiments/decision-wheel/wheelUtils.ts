
export const WHEEL_SIZE = 300;
export const WHEEL_CENTER = WHEEL_SIZE / 2;
export const WHEEL_RADIUS = 140;

export const getPointOnCircle = (
    angle: number,
    radius: number = WHEEL_RADIUS
) => {
    const radians = (angle * Math.PI) / 180;

    return {
        x: WHEEL_CENTER + radius * Math.cos(radians),
        y: WHEEL_CENTER + radius * Math.sin(radians),
    };
};

export const getSegmentPath = (
    startAngle: number,
    endAngle: number
) => {
    const start = getPointOnCircle(startAngle);
    const end = getPointOnCircle(endAngle);

    const largeArcFlag =
        endAngle - startAngle > 180 ? 1 : 0;

    return [
        `M ${WHEEL_CENTER} ${WHEEL_CENTER}`,
        `L ${start.x} ${start.y}`,
        `A ${WHEEL_RADIUS} ${WHEEL_RADIUS} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
        "Z",
    ].join(" ");
};


/**
 * Returns a random integer between 0 and max - 1.
 */
export const getRandomIndex = (max: number): number => {
    return Math.floor(Math.random() * max);
};

/**
 * Calculates the final wheel rotation needed
 * to align a selected segment with the top pointer.
 */
export const getTargetRotation = (
    selectedIndex: number,
    totalOptions: number,
    currentRotation: number,
    extraSpins: number = 5
): number => {
    const segmentAngle = 360 / totalOptions;

    // Center angle of the selected segment
    const segmentCenter =
        -90 + (selectedIndex + 0.5) * segmentAngle;

    // Normalize the alignment angle
    const alignmentAngle =
        ((-90 - segmentCenter) % 360 + 360) % 360;

    // Find the current equivalent angle and add full rotations.
    const currentNormalized =
        ((currentRotation % 360) + 360) % 360;

    const remainingRotation =
        (alignmentAngle - currentNormalized + 360) % 360;

    return (
        currentRotation +
        extraSpins * 360 +
        remainingRotation
    );
};
