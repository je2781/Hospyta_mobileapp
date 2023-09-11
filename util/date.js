export function getWeekday(date) {
  let weekdays = [0, 1, 2, 3, 4, 5, 6];

  const extractedIndex = weekdays.indexOf(date.getDay());

  switch (extractedIndex) {
    case 0:
      return "Mon";
    case 1:
      return "Tue";
    case 2:
      return "Wed";
    case 3:
      return "Thu";
    case 4:
      return "Fri";
    case 5:
      return "Sat";
    default:
      return "Sun";
  }

}

export function get24Time(date) {
  if (date.getHours() < 12 && date.getHours() > 0) {
    return `${date.getHours()}:00AM`;
  }
  if (date.getHours() === 0) {
    return `12:00AM`;
  }
  if (date.getHours() === 12) {
    return `12:00PM`;
  }
  if (date.getHours() > 12) {
    return `${date.getHours()}:00PM`;
  }
}

export function getDay(date) {
  return date.getDate();
}
