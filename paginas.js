const giro = document.querySelector(".giro");
const image = document.querySelector(".car-image");

const cursor = {
    isDragging: false,
    initialPosition: 0,

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

   
})