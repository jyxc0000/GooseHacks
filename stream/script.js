// Access the user's webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        const userWebcam = document.getElementById('user-webcam');
        userWebcam.srcObject = stream;
    })
    .catch(error => {
        console.error('Error accessing webcam:', error);
    });
