document.addEventListener('DOMContentLoaded', function () {
    fetchAllPuns();
  
    async function fetchAllPuns() {
        try {
            const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
            const puns = await response.json();
  
            let punsListHTML = "";
            for (let pun of puns) {
                let punDate = new Date(pun.date);
                let formattedDate = punDate.toLocaleString();

                punsListHTML += `
                <tr data-id="${pun._id}">
                    <td>${pun.title}</td>
                    <td>${pun.author}</td>
                    <td>${pun.tags}</td>
                    <td>${formattedDate}</td>
                    <td>
                        <button class="update-btn" data-id="${pun._id}">Update</button> |
                        <button class="delete-btn" data-id="${pun._id}">Delete</button>
                    </td>
                </tr>
                `;
            }
  
            document.getElementById('pun-list-body').innerHTML = punsListHTML;
  
<<<<<<< HEAD
            // Add event listener to each delete button
=======
            
>>>>>>> 958d1b49a07c982f57a779f97891797e00b45ca4
            let deleteBtns = document.querySelectorAll('.delete-btn');
            for (let btn of deleteBtns) {
                btn.addEventListener('click', async function (e) {
                    e.preventDefault();
                    const punIdToDelete = e.target.dataset.id;
                    await deletePun(punIdToDelete);
                });
            }
  
<<<<<<< HEAD
            // Add event listener to each update button
=======
            
>>>>>>> 958d1b49a07c982f57a779f97891797e00b45ca4
            let updateBtns = document.querySelectorAll('.update-btn');
            for (let btn of updateBtns) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    const punIdToUpdate = e.target.dataset.id;
<<<<<<< HEAD
                    // Redirect to update-pun.html with pun ID as a query parameter
=======
                    
>>>>>>> 958d1b49a07c982f57a779f97891797e00b45ca4
                    window.location.href = `update-pun.html?id=${punIdToUpdate}`;
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
  
    async function deletePun(punId) {
        try {
            await fetch(`https://blog-api-assignment.up.railway.app/posts/${punId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
<<<<<<< HEAD
            // Remove the pun from the DOM
=======
            
>>>>>>> 958d1b49a07c982f57a779f97891797e00b45ca4
            document.querySelector(`[data-id="${punId}"]`).remove();
        } catch (error) {
            console.error(error);
        }
    }
<<<<<<< HEAD

} );
=======
});
>>>>>>> 958d1b49a07c982f57a779f97891797e00b45ca4
