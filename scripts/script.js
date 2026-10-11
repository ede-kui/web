const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );

    navigation.classList.toggle("active", isOpen);
});

// navigation.addEventListener("click", () => {
//     const isOpen = menuToggle.classList.toggle("active");

//     menuToggle.setAttribute("aria-expanded", isOpen);
//     menuToggle.setAttribute(
//         "aria-label",
//         isOpen ? "Close menu" : "Open menu"
//     );

//     navigation.classList.toggle("active", isOpen);
// });