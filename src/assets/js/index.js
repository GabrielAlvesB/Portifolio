function addNome(){
    let name = document.querySelector('.logo')
    name.innerHTML = "< G.A.B />"
}

addNome();


document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const subTextElement1 = document.getElementById("sub-text-1");
    const subTextElement2 = document.getElementById("sub-text-2");
    const text = "Gabriel Alves Batista";
    const subText1 = "Desenvolvedor ";
    const subText2 = "Front End";
    const typingDelay = 100;
  
    let charIndex = 0;
  
    function typeText() {
      if (charIndex < text.length) {
        textElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingDelay);
      } else {
        // Ao finalizar a digitação do nome, inicie a digitação do primeiro subtexto
        charIndex = 0;
        setTimeout(typeSubText1, typingDelay);
      }
    }
  
    function typeSubText1() {
      if (charIndex < subText1.length) {
        subTextElement1.textContent += subText1.charAt(charIndex);
        charIndex++;
        setTimeout(typeSubText1, typingDelay);
      } else {
        // Ao finalizar a digitação do primeiro subtexto, inicie a digitação do segundo subtexto
        charIndex = 0;
        setTimeout(typeSubText2, typingDelay);
      }
    }
  
    function typeSubText2() {
      if (charIndex < subText2.length) {
        subTextElement2.textContent += subText2.charAt(charIndex);
        charIndex++;
        setTimeout(typeSubText2, typingDelay);
      }
    }
  
    typeText();
  });
  
  