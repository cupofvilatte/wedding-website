import { setLocalStorage, getLocalStorage } from './storage.mjs';
import { toJson, fromJson } from './jsonUtils.mjs';


export const loadEntries = () => {
  const entriesContainer = document.getElementById('guestbook-entries');
  if (!entriesContainer) return;

  const storedData = getLocalStorage('guestbookEntries');
  const entries = storedData ? fromJson(toJson(storedData)) : [];

  entriesContainer.innerHTML = '';  // Clear previous entries

  entries.forEach((entry) => {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('entry');
    entryDiv.innerHTML = `
      <p><strong>${entry.name}</strong></p>
      <p>${entry.message}</p>
    `;
    entriesContainer.appendChild(entryDiv);
  });
};


export const handleFormSubmit = (event) => {
  event.preventDefault();

  const form = document.getElementById('guestbook-form');
  const name = form.querySelector('#name').value;
  const message = form.querySelector('#message').value;

  if (name && message) {
    const newEntry = { name, message };

    const entries = getLocalStorage('guestbookEntries') || [];
    entries.push(newEntry);

    setLocalStorage('guestbookEntries', entries);
    loadEntries();  // Reload guestbook with the new entry

    form.reset();
  }
};


export const initGuestbookForm = () => {
  const form = document.getElementById('guestbook-form');
  if (!form) return;

  form.addEventListener('submit', handleFormSubmit);
  loadEntries();  // Load entries on page load
};
