const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const currentDayIndex = new Date().getDay();
const currentDayOfWeek = daysOfWeek[currentDayIndex];

const currentUTCTime = Date.now();


document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfWeek;
document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;

