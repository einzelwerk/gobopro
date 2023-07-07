export function quizToggle() {

    const quiz = document.querySelector(".quiz");
    const quizClose = document.querySelector(".quiz__close");
    const quizBtn = document.querySelectorAll(".take__quiz");

    quizBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            quiz.classList.remove("inactive")
            document.body.style.overflow = "hidden"
        });
    })

    
    quizClose.addEventListener("click", () => {
        quiz.classList.add("inactive")
        document.body.style.overflow = "auto"
    });
}
