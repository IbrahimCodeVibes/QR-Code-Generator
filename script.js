document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("qrInput");
    const generateBtn = document.querySelector("button");
    const qrImage = document.getElementById("qrcodeimage");
    const qrBox = document.getElementById("qrcodebox");

    generateBtn.addEventListener("click", () => {
        const data = input.value.trim();

        if (data === "") {
            alert("Please enter text or a URL to generate the QR code.");
            return;
        }

        const apiURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}`;

        // Affiche une icône de chargement temporaire
        qrImage.src = "https://i.imgur.com/llF5iyg.gif"; // spinner gif
        qrBox.style.display = "block";

        // Charger l'image réelle après un petit délai (effet visuel)
        const img = new Image();
        img.onload = () => {
            qrImage.src = apiURL;
        };
        img.onerror = () => {
            alert("Failed to generate QR code. Please try again.");
        };
        img.src = apiURL;
    });
});
