
//  Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

function getDayOfWeek(dateString) {

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const date = new Date(dateString);

  if (isNaN(date)) {
    return 'Invalid date input';
  }

  const dayOfWeek = daysOfWeek[date.getDay()];
  return dayOfWeek;
}

console.log(getDayOfWeek("2023-6-19"));

// Output: Monday
