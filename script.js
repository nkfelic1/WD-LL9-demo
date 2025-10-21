// This function shuffles an array using the Fisher-Yates Shuffle algorithm
function generateSetlist(songs) {
  // Make a copy of the array so we don't change the original
  const setlist = songs.slice();
  // Loop from the end of the array to the beginning
  for (let i = setlist.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap setlist[i] with setlist[j]
    const temp = setlist[i];
    setlist[i] = setlist[j];
    setlist[j] = temp;
  }
  // Return the shuffled array
  return setlist;
}
// ----------------------------
// 🎵 Setlist Generator
// ----------------------------

const songs = [
  "No Body European Tour Intro",
  "A Marrow Escape",
  "The Final Pulse",
  "Shadow Over the Stage",
  "Encore: Lights Out",
  // New songs added below
  "Roxanne",           // less than 10 characters
  "Rockstar",          // less than 10, contains 'rock'
  "Let It Be",         // less than 10 characters
  "Rock the Night",    // contains 'rock'
  "Africa",
  "Jump",              // less than 10 characters
  "Born to Run",
  "Rocket Man",        // contains 'rock'
  "Wonderwall",
  "Livin' on a Prayer"
];

document.getElementById("generateSetlist").addEventListener("click", () => {
  const setlist = generateSetlist(songs);
  document.getElementById("setlist").innerHTML = setlist
    .map((song, idx) => {
      // Check if this is the first or last song
      let style = "";
      if (idx === 0) {
        style = ' style="background-color: #ffe066;"'; // light yellow for first song
      } else if (idx === setlist.length - 1) {
        style = ' style="background-color: #b2f2ff;"'; // light blue for last song
      }
      // Check if the song name has more than 10 characters
      let songText = song.length > 10 ? `<em>${song}</em>` : song;

      // Add a guitar emoji and bold styling if the song contains 'rock' (case-insensitive)
      if (song.toLowerCase().includes("rock")) {
        songText = `<strong>${songText} 🎸</strong>`;
      }
      return `<li${style}>${songText}</li>`;
    })
    .join("");
});

// ----------------------------
// ⏳ Countdown Timer
// ----------------------------

const tourStart = new Date("2025-08-01T20:00:00");
const countdown = document.getElementById("countdown");

function updateCountdown() {
  // create variables define date
  let diff;

  if (diff <= 0) {
    // Create conditional for if statement under this line
  }
  // convert time difference in milliseconds under this line
  // --------------
  // update the text on your webpage using interpolation under this line
}

const timer = setInterval(updateCountdown, 1000);

// ----------------------------
// 🛠️ Feature Scaffolds
// ----------------------------

// 1️⃣ VIP Ticket Winner Generator
document.getElementById("vipWinner").innerHTML = `
    <h3>VIP Ticket Winner</h3>
    <button id="pickWinner">Pick Winner</button>
    <div id="winnerOutput"></div>
  `;

document.getElementById("pickWinner").addEventListener("click", () => {
  // Create an array of names
  const names = ["Alice", "Bob", "Charlie", "Dana"];

  // Generate a random index between 0 and the last index of the array
  const randomIndex = Math.floor(Math.random() * names.length);

  // Use the random index to select a name
  const randomName = names[randomIndex];

  // Output the randomly selected name
  console.log(randomName);
  document.getElementById(
    "winnerOutput"
  ).innerHTML = `<strong>${randomName}</strong>`;
});

// 2️⃣ Fan Favorite Showdown
document.getElementById("fanFavorite").innerHTML = `
    <h3>Fan Favorite Showdown</h3>
    <button id="vote">Vote</button>
    <div id="voteCount">Votes: 0</div>
  `;
let voteCount = 0;
document.getElementById("vote").addEventListener("click", () => {
  // Increase the vote count by 1 each time the button is clicked
  voteCount = voteCount + 1;

  // Update the vote count on the page using template literals
  document.getElementById("voteCount").innerHTML = `Votes: ${voteCount}`;
});

// 3️⃣ Tour Date Spotlight
document.getElementById("tourHighlight").innerHTML = `
    <h3>Tour Date Spotlight</h3>
    <ul>
    <li id="cityOslo">Oslo</li>
    <li id="cityBerlin">Berlin</li>
    <li id="cityLondon">London</li>
    </ul>
  `;

// Sample event listener for one city
document.getElementById("cityOslo").addEventListener("click", () => {
  // Hide all city info elements
  document.getElementById("cityInfoOslo").style.display = "block";
  document.getElementById("cityInfoBerlin").style.display = "none";
  document.getElementById("cityInfoLondon").style.display = "none";
});

// Add event listeners for Berlin and London
document.getElementById("cityBerlin").addEventListener("click", () => {
  document.getElementById("cityInfoOslo").style.display = "none";
  document.getElementById("cityInfoBerlin").style.display = "block";
  document.getElementById("cityInfoLondon").style.display = "none";
});

document.getElementById("cityLondon").addEventListener("click", () => {
  document.getElementById("cityInfoOslo").style.display = "none";
  document.getElementById("cityInfoBerlin").style.display = "none";
  document.getElementById("cityInfoLondon").style.display = "block";
});

// 4️⃣ On the Road Again
document.getElementById("nextTourStop").innerHTML = `
    <h3>On the Road Again</h3>
    <div id="nextStop"></div>
  `;

// This logic can run on page load or refresh
function displayNextTourStop() {
  // Add your code here
}

// 5️⃣ Entry Checkpoint
document.getElementById("emailCheck").innerHTML = `
    <h3>Entry Checkpoint</h3>
    <input type="email" id="emailInput" placeholder="Enter email">
    <button id="checkEmail">Check</button>
    <div id="emailResult"></div>
  `;

document.getElementById("checkEmail").addEventListener("click", () => {
  // Add your code here
});

// 6️⃣ Band Bio Toggle
document.getElementById("bioToggle").innerHTML = `
    <h3>Band Bio Toggle</h3>
    <button id="toggleBio">Show/Hide Bio</button>
    <p id="bio" style="display:none;">Skullcapz is a heavy metal band from Norway, known for their dark, intense sound and high-energy shows.</p>
  `;

document.getElementById("toggleBio").addEventListener("click", () => {
  // Add your code here
});
