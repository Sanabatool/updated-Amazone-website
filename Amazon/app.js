// For the HEad slider
const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n =0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
};
changeSlide();

prev_btn.addEventListener('click', (e) => {
    if(n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener('click', (e) => {
    if(n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
});


//for scrolling the products
// const scrollControl = document.querySelectorAll(".products");
// for( const item of scrollControl) {
//     item.addEventListener('wheel', (e) => {
//         e.preventDefault();
//         item.scrollLeft += e.deltaY;
//     });
// };

const sidebarNavigation =  document.getElementById("sidebar-contianer-navigation-id");
const siderbarOpenNavigation = document.getElementById("open-nav-sidebar");
const sidebarCloseNavigation = document.getElementById("sidebar-navigation-class");

sidebarCloseNavigation.addEventListener('click', () =>{
    sidebarNavigation.classList.toggle("sidebar-show");
});

siderbarOpenNavigation.addEventListener('click' ,() => {
    sidebarNavigation.classList.toggle("sidebar-show");
});



