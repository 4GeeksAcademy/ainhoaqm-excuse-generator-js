/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const who = [
    "My dog",
    "My cat",
    "My brother",
    "My sister",
    "My neighbor",
    "My friend",
    "My teacher",
    "My boss",
    "The mailman",
    "A unicorn",
    "An alien",
    "The President",
    "The ghost in my closet",
    "A ninja"
  ];

  const actions = [
    "ate",
    "broke",
    "hid",
    "lost",
    "spilled",
    "forgot",
    "burned",
    "buried",
    "sold",
    "dropped",
    "cooked",
    "flushed",
    "painted",
    "destroyed"
  ];

  const what = [
    "my homework",
    "my book",
    "my phone",
    "my presentation",
    "my keys",
    "my glasses",
    "my passport",
    "my shoes",
    "my car",
    "my lunch",
    "my computer",
    "my wallet",
    "my tickets"
  ];

  const when = [
    "yesterday",
    "this morning",
    "last week",
    "last night",
    "two days ago",
    "on Monday",
    "during the party",
    "while I was sleeping",
    "during the meeting",
    "on my birthday",
    "just now",
    "in the future",
    "during the eclipse"
  ];

  function generateExcuse() {
    const subject = who[Math.floor(Math.random() * who.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const thingToAvoid = what[Math.floor(Math.random() * what.length)];
    const time = when[Math.floor(Math.random() * when.length)];

    return `${subject} ${action} ${thingToAvoid} ${time}`;
  }

  function updateExcuse() {
    const excuse = generateExcuse();
    const excuseElement = document.getElementById("excuse");
    excuseElement.textContent = excuse;
  }

  const generateExcuseButton = document.getElementById(
    "generate-excuse-button"
  );
  generateExcuseButton.addEventListener("click", updateExcuse);
};
