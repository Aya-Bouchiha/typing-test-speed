export const CalculateAccuracy = (typedLetters, correctLetters) =>
	`${Math.ceil((100 * correctLetters) / (typedLetters || 1))}%`;
