const reveals =
document.querySelectorAll(
".fade-up"
);

function reveal(){

    reveals.forEach(item=>{

        const top =
        item.getBoundingClientRect().top;

        const trigger =
        window.innerHeight - 100;

        if(top < trigger){

            item.classList.add("show");
        }

    });

}

window.addEventListener(
"scroll",
reveal
);

reveal();