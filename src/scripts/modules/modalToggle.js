export function quizToggle() {

    const quiz = document.querySelector(".quiz");
    const quizClose = document.querySelector(".quiz__close");
    const quizBtns = document.querySelectorAll(".take__quiz");

    if (!quiz || !quizBtns) return;

    quizBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            window.scrollTo(0, 0);
            quiz.classList.add("visible");
            document.body.style.overflow = "hidden";
        });
    })


    quizClose.addEventListener("click", () => {
        quiz.classList.remove("visible");
        document.body.style.overflow = "auto";
    });
}

export function contactToggle() {

    const contactModal = document.querySelector(".contact-modal");
    const contactModalClose = document.querySelector(".contact-modal__close");
    const contactModalBtns = document.querySelectorAll(".contact-form");

    if (!contactModal || !contactModalBtns) return;

    contactModalBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            window.scrollTo(0, 0);
            contactModal.classList.add("visible");
            document.body.style.overflow = "hidden";
        });
    })


    contactModalClose.addEventListener("click", () => {
        contactModal.classList.remove("visible");
        document.body.style.overflow = "auto";
    });
}
