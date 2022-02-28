const searchPhone = () => {
    const searchFeald = document.getElementById('search-field');
    const searchText = searchFeald.value;
    searchFeald.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data));
}