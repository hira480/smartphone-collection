const searchPhone = () => {
    const searchFeald = document.getElementById('search-field');
    const searchText = searchFeald.value;
    searchFeald.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));
}
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${data.phone_name}</h4>
                    <h5>${data.brand}</h5>
                    <button type="button" class="btn btn-outline-success">View Details</button>
                </div>
         </div>
        `;
        searchResult.appendChild(div);
    })
}