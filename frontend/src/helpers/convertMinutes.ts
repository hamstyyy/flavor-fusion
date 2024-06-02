export const convertMinutes = (totalMinutes: number): Duration => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return {hours, minutes};
};

type Duration = {
  hours: number;
  minutes: number;
};
