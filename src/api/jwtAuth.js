export const setJWTAuthToken = user => {
    const currentUser = {
        email: user.email
    }
    // Get JWT Token
    fetch('http://localhost:5000/api/hairbox/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        // Local Storage is the easiest but not the best place to share JWT Token
        localStorage.setItem('hairboxToken', data.data)
    })
}