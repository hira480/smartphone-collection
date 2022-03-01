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
            <div class="d-flex align-items-center justify-content-center">
            <img src="${data.image}" class="card-img-top w-75" alt="...">
            </div>
            
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
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="${phone.image}" class="img-fluid w-100 rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">Phone Name : ${phone.name}</h4>
                        <h5>Brand : ${phone.brand}</h5>
                        <h6>Chipset Info : ${phone.mainFeatures.chipSet}</h6>
                        <h6>Storage : ${phone.mainFeatures.storage}</h6>
                        <h6>Sensors Info : ${phone.mainFeatures.sensors}</h6>
                        <h6>Display Size : ${phone.mainFeatures.displaySize}</h6>
                        <h6>Release Date : ${phone.releaseDate}</h6>
                        <h5>Others Info</h5>
                        <h6>Bluetooth : ("${phone.others?.Bluetooth}")</h6>
                        <h6>Radio : ("${phone.others?.Radio}")</h6>
                        <h6>GPS : ("${phone.others?.GPS}")</h6>
                        <h6>WLAN : ("${phone.others?.WLAN}")</h6>
                        <h6>USB : ("${phone.others?.USB}")</h6> 
                    </div>
                </div>
            </div>
    `;
    phoneDetail.appendChild(div);
}