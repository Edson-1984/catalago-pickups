const giro = document.querySelector(".giro");
const image = document.querySelector(".car-image");

const cursor = {
    isDragging: false,
    initialPosition: 0,

};

let currentImage = 1;

const updateImage = (direction) => {
    if (direction < 0) {
       if (currentImage == 8){
           currentImage = 1
       }else {
           currentImage += 1;
       }
    }

    if (direction > 0) {
        if (currentImage == 1){
            currentImage = 8
        }else {
            currentImage -= 1;
        }
    }

    image.src = `./img/anexos/${currentImage}.png`;
};

giro.addEventListener("mousedown", (event) => {
    cursor.isDragging = true;
    cursor.initialPosition = event.clientX;
    

});

giro.addEventListener("mouseup", (event) => {
    cursor.isDragging = false;
    
});

giro.addEventListener("mousemove" , ({ clientX }) =>{
   if (!cursor.isDragging) return;

   const offset = cursor.initialPosition - clientX;

   if (Math.abs(offset) >= 50){
       updateImage(offset)
       cursor.initialPosition = clientX
       
   }
})