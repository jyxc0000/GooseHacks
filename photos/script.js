const photoInput = document.getElementById('photoInput');
const captionInput = document.getElementById('captionInput');
const uploadButton = document.getElementById('uploadButton');
const photoGallery = document.getElementById('photoGallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');

// Load saved photos from localStorage when the page loads
window.addEventListener('load', () => {
    const savedPhotos = JSON.parse(localStorage.getItem('photos')) || [];
    savedPhotos.forEach(photoData => {
        createPhotoElement(photoData.imgSrc, photoData.caption);
    });
});

uploadButton.addEventListener('click', () => {
    const file = photoInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const imgSrc = event.target.result;
            const caption = captionInput.value;
            createPhotoElement(imgSrc, caption);
        };
        reader.readAsDataURL(file);
    }
});

function getCurrentTimestamp() {
    const now = new Date();
    const timestamp = now.toLocaleString();
    return timestamp;
}

function savePhotosToLocalStorage() {
    const photoContainers = document.querySelectorAll('.photo');
    const photos = Array.from(photoContainers).map(photoContainer => {
        const imgSrc = photoContainer.querySelector('img').src;
        const caption = photoContainer.querySelector('.caption').textContent;
        return { imgSrc, caption };
    });
    localStorage.setItem('photos', JSON.stringify(photos));
}

function createPhotoElement(imgSrc, caption) {
    const photoContainer = document.createElement('div');
    photoContainer.classList.add('photo');

    const imgElement = document.createElement('img');
    imgElement.src = imgSrc;

    imgElement.addEventListener('click', () => {
        openLightbox(imgSrc, caption);
    });

    const captionElement = document.createElement('div');
    captionElement.classList.add('caption');
    captionElement.textContent = caption;

    const timestampElement = document.createElement('div');
    timestampElement.classList.add('timestamp');
    timestampElement.textContent = getCurrentTimestamp();

    const actionsElement = document.createElement('div');
    actionsElement.classList.add('actions');
    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        const newCaption = prompt('Edit caption:', caption);
        if (newCaption !== null) {
            captionElement.textContent = newCaption;
            savePhotosToLocalStorage();
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        photoContainer.remove();
        savePhotosToLocalStorage();
    });

    actionsElement.appendChild(editButton);
    actionsElement.appendChild(deleteButton);

    photoContainer.appendChild(imgElement);
    photoContainer.appendChild(captionElement);
    photoContainer.appendChild(timestampElement);
    photoContainer.appendChild(actionsElement);

    photoGallery.appendChild(photoContainer);

    photoInput.value = '';
    captionInput.value = '';

    savePhotosToLocalStorage();
}

function openLightbox(imgSrc, caption) {
    lightboxImage.src = imgSrc;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'block';
}

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
