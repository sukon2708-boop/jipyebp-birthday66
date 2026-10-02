const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
Happy i auan dayเธอเป็นคนแรกที่ชั้นทำอะไรแบบนี้อยากให้ขอบคุณตัวเองเยอะ ๆ นะรักตัวเองให้มาก ๆ มีความสุขในทุก ๆ วัน ขอให้เป็น19ที่ดีอย่าคิดว่าไม่รักนะเค้ารักเธอที่สุดแล้วอยู่กับเค้าไปนาน ๆ ขอให้ได้พักในวันที่เหนื่อยมาก ๆไว้พากันไปกินของอร่อยเยอะ ๆ เลย rak na auan
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
