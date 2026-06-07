window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.querySelector(".loader").style.opacity="0";

        document.querySelector(".loader").style.pointerEvents="none";

        setTimeout(()=>{

            document.querySelector(".loader").remove();

        },500);

    },2200);

});
const glow =
document.querySelector(
".mouse-glow"
);

document.addEventListener(
"mousemove",
(e)=>{

    glow.style.left =
    e.clientX - 200 + "px";

    glow.style.top =
    e.clientY - 200 + "px";

});
const menuBtn =
document.querySelector(
".menu-btn"
);

const navLinks =
document.querySelector(
"nav ul"
);

menuBtn.addEventListener(
"click",
()=>{

    navLinks.classList.toggle(
    "active"
    );

});
