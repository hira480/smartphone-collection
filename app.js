const searchPhone = () => {
    const searchFeald = document.getElementById('search-field');
    const searchText = searchFeald.value;
    searchFeald.value = '';
    if (searchText == '') {
        // wright something
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data));
    }

}
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (data.length == 0) {
        //   no result found
    }
    data.forEach(data => {
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${data.phone_name}</h4>
                    <h5>${data.brand}</h5>
                    <button onclick="loadPhoneDetail('${data.slug}')" type="button" class="btn btn-outline-success">View Details</button>
                </div>
         </div>
        `;
        searchResult.appendChild(div);
    })
}
const loadPhoneDetail = slug => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data));
}
const displayPhoneDetail = phone => {
    console.log(phone);
    const phoneDetail = document.getElementById('phone-details');
    phoneDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="row g-0">
                <div class="col-md-4">
                    <img src="${phone.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">Phone Name : ${phone.name}</h4>
                        <h5>Release Date : ${phone.releaseDate}</h5>
                    </div>
                </div>
            </div>
    `;
    phoneDetail.appendChild(div);
}