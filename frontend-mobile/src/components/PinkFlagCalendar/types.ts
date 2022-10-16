export type CycleEventType = 'menstruation' | 'expectedMenstruationStart' | 'ovulation' | 'fertility';

export type CycleEvent = {
  date: Date;
  type: CycleEventType;
};
