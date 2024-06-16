document.addEventListener("DOMContentLoaded", () => {
    console.log('1232132132131')
    const menuToggle = document.getElementsByClassName("js-header-hamburger")[0];
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("closeBtn");
    const overlay = document.getElementById("overlay");

    // Function to copy main menu links to sidebar
    const copyMenuLinks = () => {
        const mainMenu = document.getElementById("mainMenu");
        const sidebarMenu = document.getElementById("sidebarMenu");
        sidebarMenu.innerHTML = mainMenu.innerHTML;
    };

    menuToggle.addEventListener("click", () => {
        sidebar.style.left = "0";
        overlay.style.display = "block";
        copyMenuLinks();
    });



    closeBtn.addEventListener("click", () => {
        sidebar.style.left = "-350px";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", () => {
        sidebar.style.left = "-350px";
        overlay.style.display = "none";
    });
});