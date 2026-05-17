import './style.css';
import dayjs from 'dayjs';

const form = document.querySelector('#birthday-form');
const dateInput = document.querySelector('#bday');
const dialog = document.querySelector('#result-dialog');
const closeBtn = document.querySelector('#close-dialog');
const dialogContent = document.querySelector('#dialog-content');
const dialogWeeks = document.querySelector('#dialog-weeks');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const today = dayjs().startOf('day');
  const birthDate = dayjs(dateInput.value).startOf('day');

  const daysPassed = today.diff(birthDate, 'days');

  let nextBirthday = birthDate.year(today.year());
  
  if (nextBirthday.isBefore(today, 'day')) {
    nextBirthday = nextBirthday.add(1, 'year');
  }

  const daysUntilNext = nextBirthday.diff(today, 'days');
  const weeksUntilNext = Math.floor(daysUntilNext / 7);

  dialogWeeks.textContent = '';

  if (daysUntilNext === 0) {
    alert('Wszystkiego najlepszego!');
  } else if (weeksUntilNext === 0) {
    dialogWeeks.textContent = 'Masz urodziny w tym tygodniu!';
  } else {
    dialogWeeks.textContent = `Do kolejnych urodzin pozostało: ${weeksUntilNext} tygodni(a).`;
  }

  dialogContent.textContent = `Od Twoich narodzin minęło dokładnie ${daysPassed} dni.`;
  
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  dialog.close();
});