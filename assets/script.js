const whatsappButton = document.querySelector("#whatsappButton");
const inquiryForm = document.querySelector("#inquiryForm");

// =========================
// PRODUCT GALLERY
// =========================

const productImages = [
    "assets/product-1.png",
    "assets/product-2.jpg",
    "assets/product-3.jpg"
];

let currentImageIndex = 0;

const mainProductImage =
    document.querySelector("#mainProductImage");

const prevButton =
    document.querySelector("#prevButton");

const nextButton =
    document.querySelector("#nextButton");

const thumbnails =
    document.querySelectorAll(".thumbnail");

function showImage(index) {

    currentImageIndex = index;

    mainProductImage.src =
        productImages[currentImageIndex];


    // Update active thumbnail
    thumbnails.forEach((thumbnail, thumbnailIndex) => {

        thumbnail.classList.toggle(
            "active",
            thumbnailIndex === currentImageIndex
        );

    });
}

thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener("click", () => {

        const index =
            Number(thumbnail.dataset.index);

        showImage(index);

    });

});

prevButton.addEventListener("click", () => {

    const previousIndex =
        (currentImageIndex - 1 + productImages.length)
        % productImages.length;

    showImage(previousIndex);

});

nextButton.addEventListener("click", () => {

    const nextIndex =
        (currentImageIndex + 1)
        % productImages.length;

    showImage(nextIndex);

});


const imageLightbox =
    document.querySelector("#imageLightbox");

const lightboxImage =
    document.querySelector("#lightboxImage");

const lightboxClose =
    document.querySelector("#lightboxClose");


mainProductImage.addEventListener("click", () => {

    lightboxImage.src =
        mainProductImage.src;

    imageLightbox.classList.add("active");

    imageLightbox.setAttribute(
        "aria-hidden",
        "false"
    );

});

lightboxClose.addEventListener("click", () => {

    imageLightbox.classList.remove("active");

    imageLightbox.setAttribute(
        "aria-hidden",
        "true"
    );

});

imageLightbox.addEventListener("click", (event) => {

    if (event.target === imageLightbox) {

        imageLightbox.classList.remove("active");

        imageLightbox.setAttribute(
            "aria-hidden",
            "true"
        );

    }

});


// =========================
// WHATSAPP CTA
// =========================

whatsappButton.addEventListener("click", () => {

    // Mock analytics event
    console.log("analytics_event", {
        event: "whatsapp_cta_click",
        product: "KS 3290 GTBE"
    });

    // Open WhatsApp
    const phoneNumber = "6281806424657";

    const message =
        "Halo, saya tertarik dengan produk MODENA KS 3290 GTBE.";

    const whatsappUrl =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
});


// =========================
// INQUIRY FORM
// =========================

inquiryForm.addEventListener("submit", (event) => {

    // Prevent normal form submission
    event.preventDefault();


    // Get form values
    const name =
        document.querySelector("#name").value.trim();

    const email =
        document.querySelector("#email").value.trim();

    const phone =
        document.querySelector("#phone").value.trim();

    const message =
        document.querySelector("#message").value.trim();

    // Get error elements
    const nameError =
        document.querySelector("#nameError");

    const emailError =
        document.querySelector("#emailError");

    const phoneError =
        document.querySelector("#phoneError");

    const messageError =
        document.querySelector("#messageError");
    
        const formSuccess =
        document.querySelector("#formSuccess");
    


    // Reset previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";


    // Validation status
    let isValid = true;


    // Validate name
    if (!name) {
        nameError.textContent = "Name is required.";
        isValid = false;
    }


    // Validate email
    if (!email) {
        emailError.textContent = "Email is required.";
        isValid = false;
    }


    // Validate phone
    if (!phone) {
        phoneError.textContent = "Phone number is required.";
        isValid = false;
    }

    if (phone && !/^[0-9]+$/.test(phone)) {
        phoneError.textContent =
            "Phone number must contain numbers only.";
        isValid = false;
    }


    // Validate message
    if (!message) {
        messageError.textContent = "Message is required.";
        isValid = false;
    }


    // Stop here if validation fails
    if (!isValid) {
        return;
    }


    // Form is valid
    formSuccess.textContent =
        "Thank you! Your inquiry has been submitted.";


    // Mock submission
    console.log("inquiry_form_submit", {
        name,
        email,
        phone,
        message
    });


    // Reset form
    inquiryForm.reset();

});