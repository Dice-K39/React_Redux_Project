export const searchQuery = () =>
{
    const formData = new FormData(document.querySelector(".search-form"));
    const url = new URL("http://localhost:3001/search");
    
    url.search = new URLSearchParams(formData);
debugger
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}