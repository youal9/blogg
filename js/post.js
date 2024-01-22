document.addEventListener('DOMContentLoaded', function () {
<<<<<<< HEAD
    // Hämta pun-ID från URL-query-parametern
    const urlParams = new URLSearchParams(window.location.search);
    const punId = urlParams.get('id');

    // Kontrollera om punId finns och anropa sedan en funktion för att hämta innehållet
=======
    
    const urlParams = new URLSearchParams(window.location.search);
    const punId = urlParams.get('id');

    
>>>>>>> 958d1b49a07c982f57a779f97891797e00b45ca4
    if (punId) {
        fetchPostDetails(punId);
    } else {
        console.error('Pun ID is missing in the URL.');
    }

    async function fetchPostDetails(id) {
        try {
            const response = await fetch(`https://blog-api-assignment.up.railway.app/posts/${id}`);
            const post = await response.json();
            const postDate = new Date(post.date);
<<<<<<< HEAD
            // Fyll innehållet i HTML
=======
            
>>>>>>> 958d1b49a07c982f57a779f97891797e00b45ca4
            document.getElementById('post-content').innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.author} /  ${postDate.toLocaleString()}</p>
                <p class="tags">${post.tags}</p>
                <p>${post.content}</p>
            `;
        } catch (error) {
            console.error(error);
        }
    }
});