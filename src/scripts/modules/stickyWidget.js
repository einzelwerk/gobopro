export function initStickyWidget(){
    const stickyWidget = document.querySelector(".sticky-widget");

    // eslint-disable-next-line
    if(!stickyWidget) return;
    stickyWidget.classList.remove("container");
    
    window.addEventListener("resize", () => {
        if(window.innerWidth < 992){
            stickyWidget.classList.add("container");
            
            let oldScrollY = window.scrollY;
            window.addEventListener("scroll", () => {
                if(oldScrollY < window.scrollY && window.innerWidth < 992){
                    stickyWidget.style.display = "flex";
                } else if(oldScrollY > window.scrollY && window.innerWidth < 992) {
                    stickyWidget.style.display = "none";
                }
                oldScrollY = window.scrollY;
            })    
        }else{
            stickyWidget.classList.remove("container");
            stickyWidget.style.display = "flex";
        }
    })

}