export type Withdrawal = Record<Banknote, number>;

const BANKNOTES_FACE_VALUES = [500, 200, 100, 50, 20, 10] as const;
type Banknote = typeof BANKNOTES_FACE_VALUES[number];

const EMPTY_WITHDRAWAL: Withdrawal = {
  10: 0,
  20: 0,
  50: 0,
  100: 0,
  200: 0,
  500: 0,
};

const euclidianDivision = (dividend: number, divisor: number): { quotient: number; remainder: number } => {
  const remainder = dividend % divisor;
  const quotient = (dividend - remainder) / divisor;

  return { quotient, remainder };
};

export const atm = (desiredAmount: number, availableBanknotes: Banknote[] = [...BANKNOTES_FACE_VALUES]): Withdrawal => {
  if (desiredAmount % 10 !== 0) {
    throw new Error("Desired amount must be a multiple of 10");
  }

  if (desiredAmount === 0) {
    return EMPTY_WITHDRAWAL;
  }

  const [maximumFaceValue, ...remaindingBanknotes] = availableBanknotes;

  const { quotient, remainder } = euclidianDivision(desiredAmount, maximumFaceValue);

  return {
    ...atm(remainder, remaindingBanknotes),
    [maximumFaceValue]: quotient,
  };
};
