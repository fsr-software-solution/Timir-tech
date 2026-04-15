// Native fetch is available in Node.js v18+ 
const registerAdmin = async () => {
    const username = 'admin';
    const password = 'password123'; // Change this!

    try {
        const response = await fetch('http://localhost:5000/api/admin/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
            console.log('Admin registered successfully:', data);
        } else {
            console.error('Failed to register admin:', data);
        }
    } catch (error) {
        console.error('Error connecting to backend:', error.message);
        console.log('Make sure your backend server is running on http://localhost:5000');
    }
};

registerAdmin();
