// create-post.js
document.getElementById('pun-form').addEventListener('submit', createPuns);

async function createPuns(e) {
    e.preventDefault();

    // Get values from form fields
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const tags = document.getElementById('tags').value;
    const content = document.getElementById('content').value;

    try {
        // Make a POST request to the server
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                author,
                tags,
                content
            })
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`Failed to create pun. Status: ${response.status}`);
        }

        // Optionally, you can handle the successful response here
        const responseData = await response.json();
        console.log('Pun created successfully:', responseData);
    } catch (error) {
        console.error('Error creating pun:', error);
    }
}
