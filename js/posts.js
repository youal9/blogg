document.addEventListener('DOMContentLoaded', function () {
    
    fetchAllPuns();

    async function fetchAllPuns() {
        try {
            const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
            const puns = await response.json();

            let punsListHTML = "";
            for (let pun of puns) {
                let punDate = new Date(pun.date);

                punsListHTML += `
                <tr data-id="${pun._id}">
                    <h2 class="editable" contenteditable="true">${pun.title}</h2>
                    <p>${pun.author} / ${punDate.toLocaleString()}<p>
                    <p class="tags">${pun.tags}</p>
                    <p>${pun.content.slice(0, 100)}...<a href="post.html?id=${pun._id}">Read more</a></p> 
                </tr>
                `;
            }
            document.getElementById('pun-list-body').innerHTML = punsListHTML;
        } catch (error) {
            console.log(error);
        }
    }

    
    
});
