function saveMood(mood) {
  const today = new Date().toLocaleDateString();
  const moodEntry = { date: today, mood };

  // Get existing moods from localStorage
  let moodHistory = JSON.parse(localStorage.getItem('moodHistory')) || [];

  // Check if today's mood is already logged
  const existing = moodHistory.find(entry => entry.date === today);
  if (existing) {
    existing.mood = mood;
  } else {
    moodHistory.push(moodEntry);
  }

  // Save updated history
  localStorage.setItem('moodHistory', JSON.stringify(moodHistory));
  displayMoodHistory();
}

function displayMoodHistory() {
  const moodList = document.getElementById('mood-history');
  moodList.innerHTML = '';

  const moodHistory = JSON.parse(localStorage.getItem('moodHistory')) || [];

  moodHistory.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = ${entry.date}: ${entry.mood};
    moodList.appendChild(li);
  });
}

// Load mood history on page load
window.onload = displayMoodHistory;