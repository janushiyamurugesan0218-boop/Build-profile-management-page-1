document.addEventListener('DOMContentLoaded', () => {
    const avatarInput = document.getElementById('avatar-input');
    const avatarDisplay = document.getElementById('avatar-display');
    const avatarPlaceholder = document.getElementById('avatar-placeholder');
    const profileForm = document.getElementById('profile-form');
    const statusMsg = document.getElementById('status-msg');

    // 1. Handle profile picture preview
    avatarInput.addEventListener('change', function() {
        const file = this.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.addEventListener('load', function() {
                // Remove placeholder text if it exists
                if (avatarPlaceholder) {
                    avatarPlaceholder.style.display = 'none';
                }
                
                // Set the background image of the preview div to the uploaded image
                avatarDisplay.innerHTML = `<img src="${this.result}" alt="Profile Preview">`;
            });
            
            reader.readAsDataURL(file);
        }
    });

    // 2. Handle form submission
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop the page from reloading
        
        // Grab values to simulate saving data (e.g., to send to a server later)
        const updatedName = document.getElementById('username').value;
        const updatedEmail = document.getElementById('email').value;
        const updatedBio = document.getElementById('bio').value;

        console.log("Saving Profile Data...");
        console.log({ name: updatedName, email: updatedEmail, bio: updatedBio });

        // Show success visual indicator
        statusMsg.style.display = 'block';

        // Hide the success message after 3 seconds
        setTimeout(() => {
            statusMsg.style.display = 'none';
        }, 3000);
    });
});