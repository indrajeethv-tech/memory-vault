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

  }, 1000);
}

/* Letter Save */
const letter=document.getElementById("letterText");

letter.innerText=localStorage.getItem("memoryLetter")||`My dearest maa… luzzzz… Bhoomi 💗
... (your full letter text remains exactly same)
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

  if(section.classList.contains("active")){
    section.classList.remove("active");
    stopAllMedia();
    return;
  }

  document.querySelectorAll(".media-section")
    .forEach(sec => sec.classList.remove("active"));

  stopAllMedia();

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

/* Bucket list auto save */
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

/* Shooting stars */
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

setInterval(createStar, 1500);

/* Fade in sections */
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

/* Music player */
function playAudio(src, caption){

  const audio = document.getElementById("mainAudio");
  const text = document.getElementById("audioCaption");

  audio.src = src;
  audio.play();

  text.innerText = caption;
}

/* Calendar memory toggle */
function toggleMemory(id){

  const mem = document.getElementById(id);

  if(mem.classList.contains("active")){
    mem.classList.remove("active");
    return;
  }

  document.querySelectorAll(".memory-text")
    .forEach(m => m.classList.remove("active"));

  mem.classList.add("active");
}