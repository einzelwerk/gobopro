export function initStickyWidget(){
    const stickyWidget = document.querySelector(".sticky-widget");

    // eslint-disable-next-line
    if(!stickyWidget) return;

    window.addEventListener("resize", () => {
        if(window.innerWidth < 992){
            stickyWidget.classList.add("container");
        }else{
            stickyWidget.classList.remove("container");
        }
    })
}