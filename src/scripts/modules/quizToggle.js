export function quizToggle() {

    const quiz = document.querySelector(".quiz");
    const quizClose = document.querySelector(".quiz__close");
    const quizBtn = document.querySelector(".take__quiz");

    quizBtn.addEventListener("click", () => {
        quiz.classList.remove("inactive")
        document.body.style.overflow = "hidden"
    });
    
    quizClose.addEventListener("click", () => {
        quiz.classList.add("inactive")
        document.body.style.overflow = "auto"
    });
}
