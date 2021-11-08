function fetchData() {
    fetch('https://reqres.in/api/users')
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR")
            }
            return response.json()
        })
        .then(data => {
            console.log('Data from API')
            console.log(data)
            const html = data.data
                .map(user => {
                    return `
                        <div class="card">
                        <p><strong>Name: ${user.first_name}</strong></p>
                  
                         <p>email: ${user.email}</p>
                         <img src="${user.avatar}" alt="${user.first_name}">
                        </div>        
                    `;
                })
                .join('')
            document.querySelector(".flex").insertAdjacentHTML('afterbegin', html)
        })
        .catch(error => {
            console.log(error)
        })
}

fetchData()