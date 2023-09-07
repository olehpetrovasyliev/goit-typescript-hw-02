/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  MON,
  TUE,
  WEN,
  THU,
  FRI,
  SAT,
  SUN,
}

const isWeeend = (day: Weekday) => {
  if (day === Weekday.SAT || Weekday.SUN) {
    return "THIS IS WEEKEND";
  }
  return "THIS IS NOT WEEKEND";
};
