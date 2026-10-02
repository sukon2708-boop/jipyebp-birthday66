const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
Happy birthday นะคะที่รัก 
ดีใจที่เธอเกิดมาและเราได้รักกัน ขอให้เธอมีแต่รอยยิ้ม เสียงหัวเราะ 
สดใสเย้อเย้อ เหนื่อยน้อย ๆ ขอให้ผ่านทุกเรื่องที่เจอไปได้ด้วยดี เธอเก่งมาก ๆ เค้าภูมิใจในตัวเธอเสมอ ขอให้ทุกความฝันของเธอเป็นจริง เค้าจะคอยเป็นกำลังใจ อยู่ข้าง ๆ เธอเสมอเลยนะ รักเธอที่สุดในโลก 💝
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
