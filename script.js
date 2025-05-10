// Initialize StreamElements
const se = new StreamElements();

// Get DOM elements
const alertBox = document.getElementById('alert-box');
const alertImage = document.getElementById('alert-image');
const alertName = document.getElementById('alert-name');
const alertMessage = document.getElementById('alert-message');

// Function to show alert
function showAlert(data) {
    // Set alert content
    alertImage.src = data.image || 'https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png';
    alertName.textContent = data.name;
    alertMessage.textContent = data.message;

    // Show alert
    alertBox.classList.add('show');

    // Hide alert after 5 seconds
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 5000);
}

// Listen for StreamElements events
window.addEventListener('onEventReceived', function(obj) {
    const data = obj.detail.event;
    
    if (obj.detail.listener === 'follow') {
        showAlert({
            name: data.name,
            message: 'just followed!',
            image: data.avatar
        });
    }
    
    if (obj.detail.listener === 'subscriber-latest') {
        showAlert({
            name: data.name,
            message: `subscribed for ${data.amount} months!`,
            image: data.avatar
        });
    }
    
    if (obj.detail.listener === 'resubscriber-latest') {
        showAlert({
            name: data.name,
            message: `resubscribed for ${data.amount} months!`,
            image: data.avatar
        });
    }
    
    if (obj.detail.listener === 'subgift-latest') {
        showAlert({
            name: data.name,
            message: `gifted ${data.amount} subscriptions!`,
            image: data.avatar
        });
    }
    
    if (obj.detail.listener === 'tip-latest') {
        showAlert({
            name: data.name,
            message: `donated $${data.amount}!`,
            image: data.avatar
        });
    }
});

// Initialize the overlay
se.init(); 