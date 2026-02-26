const correctPassword="Myy Luzzz";

function checkPassword(){
  if(document.getElementById("passwordInput").value===correctPassword){
    document.getElementById("passwordScreen").style.display="none";
    document.getElementById("envelopeScreen").style.display="flex";
  }else{
    alert("Wrong password 💔");
  }
}

function openEnvelope(){
  const envelope = document.querySelector(".envelope");
  envelope.classList.add("open");

  setTimeout(() => {
    document.getElementById("envelopeScreen").style.display = "none";

    const main = document.getElementById("mainContent");
    main.style.display = "block";

    setTimeout(() => {
      main.classList.add("show");
    }, 50);

    const music = document.getElementById("bgMusic");
    if(music){
      music.play().catch(()=>{});
    }

  }, 1000); // waits for flap animation
}

/* Letter Save */
const letter=document.getElementById("letterText");

letter.innerText=localStorage.getItem("memoryLetter")||
`My dearest maa… luzzzz… Bhoomi 💗

I don’t know how to begin this letter…because some stories don’t start with words, they start with feelings 🌙

I still remember 7th November 2023 — 
the first time we spoke through texts.I don’t remember the exact words I typed, or how the conversation even began…
but I remember how, from that very moment, something quietly started changing inside me.
Simple messages slowly turned into memories I now hold close to my heart ✨.

On 24th April 2024, I asked you for a snap for the first time 📸.
I never knew that a small request would become such a beautiful habit.
I’ve asked you for more than a hundred snaps since then — and every single time you sent one, my heart smiled.
Seeing Myy luzzz face always made my day feel lighter. 🥹✨💖

10th February 2025 — is a day I’ll always remember with a heavy heart.
I told you about seeing my old school crush, and you teased me playfully 😅
But I took it the wrong way… my mood fell, my heart closed, and I went silent.
What I’ll never forget is you calling me again and again 📞🥺
Even when you were at home… even when your parents were there… you still tried.
I didn’t pick up even once — yet your effort that day made me realize how much I mattered to you 🤍
That meant more to me than you’ll ever know.

14th February 2025 — your birthday 🎂🌸
The first birthday of yours that I celebrated with you, Sev, and your Bhava.
That day lives rent-free in my heart 🥹
The time we spent, the photo we took 📷,
and that smile on your face —
That smile is still one of my favorite memories.
I swear, I’ve never forgotten it for even a second 💕

On 24th February 2025, our first PU college function 🎉.
I still remember how I said I wouldn’t come…
and the moment you saw me at college, the way your expression changed —
that reaction meant more to me than anything else in that entire function 🥹❤️.

24th September 2025 — I asked you to make a heart shape with your hair and send me a video 💕.
That day, I was travelling home from college, tired and drained, sitting in a bus.
The moment I saw that video, all my tiredness disappeared.
I smiled like an idiot and didn’t even know how to react 🚌💖.

26th October 2025 — after my cousin’s wedding 👰, and we didn’t talk properly for two days.
I was busy, exhausted, surrounded by people…
That night when I messaged you, you were angry and said, “Don’t talk to me.”
When I asked what I should do, you told me to do 100 buski and send a video immediately, or else you wouldn’t talk 😭
Even though I was with my cousins, I tried my best, did it, sent the video… 
Seeing you happy after that…
it made me realise every second worth it 💖
I still remember that moment clearly 🤍

On 29th October 2025, you sent me a Bestestttfriend reel and asked if we should do it together 😂💞.
We still haven’t done it…
and there are two such reels waiting for us, patiently, just like some moments do 🤣✨.

And then… 16th November 2025, a random Sunday that became unforgettable 🎶🥹.
You sent me Paravashanadenu in your own voice — after I had asked you for so long.
From that very day, your voice became my ringtone…
so every call could begin with you 💖.

I still smile when I think about how I used to scold you for academics—
not out of anger, but care 🥺
I took ma’am’s help, collected question papers before exam, and even asked her to give you marks…
and you just said, “Leave it, I know.”
That was so you 🤍

Those PU College breaks standing near the bio block during break time, just to see you,
our groups teasing us while we spoke in stolen moments 🤭

And those bus rides—me waiting to go in the same bus, travelling together, yet never talking 🤣
Silence, smiles, and feelings we never said out loud.

And here comes the, year after your 18th bday

21st February 2026…
The first memory after your 18th birthday that still makes my heart feel full.

I told you I would give you a gift.
And that day, Nitesh and I searched almost the entire KR Puram just to find something worthy of you 🤣
Shop after shop… nothing felt right.
So we decided to go all the way to Indiranagar.
We kept searching until 7 in the evening, tired but still not ready to give up.

I’ve never done that much for anyone before.
And somewhere between those streets and stores, I realised something…
It wasn’t about the gift.
It was about you. 🤍
And yes… I also realised shopping for a girl’s gift is a whole different level of difficulty 😮‍💨
But for you, it didn’t feel like a task.
It felt special.

And then… 24th and 25th night.

Those two nights were different.
We spoke more than we ever had before.
Long conversations. Honest words. No pretending.

I opened up to you completely—
my thoughts, my feelings, my fears.
And you stayed.
We kept sending reels, texting, laughing, being silly for each other till almost 12 at night 🥹
I was so happy… genuinely, peacefully happy.

And that snap at 12:09 AM on 26th 🤣🤍
I still remember the exact feeling in my chest when I saw it.

The promises we made…
to spend more time together in the future,
to take pictures, make reels, do video calls…
Those weren’t just words to me.
I kept them safely in my heart.

I’m waiting for your exams to get over, maa.
Waiting for the day we can sit and talk without checking the time.
Waiting to make those promises real, luzzzzzz 🤍✨

These memories may look small to the world.
But to me… they were moments where my heart felt closest to yours.

— always,
with feelings I never fully learned how to hide 🌙💫

These aren’t just dates or events.
They are pieces of my heart, scattered across time — all connected to you 🤍.

And before I end this letter…

Now you’ve chosen the harder path—taking a drop to chase your dream 🩺✨
I truly believe in you, maa.
You will achieve your goal 🤍

Always yours 🫶,
— nayiiiiiiiiiii🐶
`;

letter.addEventListener("input",()=>{
  localStorage.setItem("memoryLetter",letter.innerText);
});

/* Popup */
function showPopup(message){
  document.getElementById("popupModal").style.display="flex";
  document.getElementById("popupText").innerText=message;
}

function closePopup(){
  document.getElementById("popupModal").style.display="none";
}
/* Open Folder Section */
function openSection(sectionId){

  const section = document.getElementById(sectionId);

  // If already open → close it
  if(section.classList.contains("active")){
    section.classList.remove("active");
    stopAllMedia();
    return;
  }

  // Close all sections
  document.querySelectorAll(".media-section")
    .forEach(sec => sec.classList.remove("active"));

  stopAllMedia();

  // Open selected
  section.classList.add("active");
}

function stopAllMedia(){
  document.querySelectorAll("video, audio").forEach(media=>{
    media.pause();
    media.currentTime = 0;
  });
}

/* Open Media Preview */
function openVideo(src){

  // Stop all background media
  document.querySelectorAll("video, audio").forEach(media => {
    media.pause();
    media.currentTime = 0;
  });

  const modal = document.getElementById("mediaModal");

  modal.innerHTML = `
  <div onclick="closeMedia()" 
       style="position:absolute;top:20px;right:30px;font-size:30px;cursor:pointer;color:white;">✖</div>

  <video src="${src}" controls autoplay
         style="
           max-width:95vw;
           max-height:90vh;
           width:auto;
           height:auto;
           object-fit:contain;
           border-radius:12px;
         ">
  </video>
`;

  modal.style.display = "flex";
}

function closeMedia(){

  const modal = document.getElementById("mediaModal");

  modal.querySelectorAll("video, audio").forEach(media=>{
    media.pause();
  });

  modal.style.display = "none";
}

// Auto-save bucket list progress
document.querySelectorAll(".bucket-list input[type='checkbox']")
  .forEach((checkbox, index) => {

    const saved = localStorage.getItem("bucket_" + index);
    if(saved === "true"){
      checkbox.checked = true;
    }

    checkbox.addEventListener("change", () => {
      localStorage.setItem("bucket_" + index, checkbox.checked);
    });

});
// Continuous Shooting Stars
function createStar() {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.animation = `shoot ${3 + Math.random()*3}s linear`;
  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 6000);
}

// Generate stars repeatedly
setInterval(createStar, 1500);
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll("section")
  .forEach(sec => {
    sec.classList.add("fade-section");
    observer.observe(sec);
  });
  function playAudio(src, caption){

  const audio = document.getElementById("mainAudio");
  const text = document.getElementById("audioCaption");

  audio.src = src;
  audio.play();

  text.innerText = caption;
}