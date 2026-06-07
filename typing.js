const textElement =
document.getElementById("typing-text");

const roles = [

"Computer Science Student",

"Web Developer",

"Tech Enthusiast",

"Creative Learner"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

    const currentRole =
    roles[roleIndex];

    if(!deleting){

        textElement.textContent =
        currentRole.substring(
        0,
        charIndex + 1
        );

        charIndex++;

        if(charIndex === currentRole.length){

            deleting = true;

            setTimeout(type,1500);

            return;
        }

    }else{

        textElement.textContent =
        currentRole.substring(
        0,
        charIndex - 1
        );

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex = 0;
            }
        }
    }

    setTimeout(
        type,
        deleting ? 50 : 100
    );
}

type();