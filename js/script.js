"use strict";

function scrollToBottomOfElement() {
  const element = document.getElementById("message-box");
  element.scrollTop = element.scrollHeight;
}

const messages = [
  "Hello",
  "Hi",
  "I am fine",
  "How are you?",
  "How do you do?",
  "Where do you live in?",
  "Are you okay?",
  "Sorry for not coming",
  "See you tommorrow",
  "Bye",
];

const messageEl = document.getElementById("message");
const sendBtnEl = document.getElementById("send");
const messageDetailsEl = document.getElementById("message-details");
sendBtnEl.addEventListener("click", () => {
  const randomId = Math.floor(Math.random() * 100);
  const id = `tick-${randomId}`;
  messageDetailsEl.insertAdjacentHTML(
    "beforebegin",
    `<div class="message-user">
              <div class="message-info">
                <small>Mosabbir</small>
                <p>
                  ${messageEl.value} 
                </p> 
              </div>
              <div>
                <img src="img/mosabbir_photo_new.jpg" alt="" />
              </div>
              <svg id=${id} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="grey"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
              
            </div>`
  );
  scrollToBottomOfElement();
  messageEl.value = "";
  setTimeout(() => {
    const tickEl = document.getElementById(`${id}`);
    tickEl.setAttribute("fill", `black`);
  }, 2000);

  setTimeout(() => {
    const tickEl = document.getElementById(`${id}`);
    tickEl.setAttribute("fill", `green`);
    document.getElementById("typing").classList.add("show");
  }, 4000);

  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    messageDetailsEl.insertAdjacentHTML(
      "beforebegin",
      `<div class="message">
              <div>
                <img src="img/mosabbir_photo.jpg" alt="" />
              </div>  
              <div class="message-info">
                <small>Saifuddin</small>
                <p>
                  ${messages[randomNumber]} 
                </p> 
              </div>
            </div>`
    );
    document.getElementById("typing").classList.remove("show");
    document.getElementById("typing").classList.add("typing");
    scrollToBottomOfElement();
  }, 6000);
});
