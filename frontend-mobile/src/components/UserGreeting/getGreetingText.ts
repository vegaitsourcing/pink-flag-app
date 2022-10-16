export const getGreetingText = (name?: string): string => {
  if (name) {
    return `Ćao ${name},`;
  }

  return 'Ćao,';
};
