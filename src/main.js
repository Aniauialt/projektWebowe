import './style.css';
import dayjs from 'dayjs';

const form = document.querySelector('#birthday-form');
const dateInput = document.querySelector('#bday');
const dialog = document.querySelector('#result-dialog');
const closeBtn = document.querySelector('#close-dialog');
const dialogContent = document.querySelector('#dialog-content');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

 
  const birthDate = dayjs(dateInput.value);
  const today = dayjs();

  const daysPassed = today.diff(birthDate, 'days');

  const isBirthdayToday = today.format('MM-DD') === birthDate.format('MM-DD');

  if (isBirthdayToday) {
    alert('Wszystkiego najlepszego!');
  }

  dialogContent.textContent = `Od Twoich narodzin minęło dokładnie ${daysPassed} dni.`;
  
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  dialog.close();
});