export const subtractYears = (date: Date, years: number): Date => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() - years);
  return newDate;
};
