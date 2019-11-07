export const loadData = async(url) =>{
    const response = await fetch('https://my-little-cors-proxy.herokuapp.com/' +url);
    const data = await response.json();
    return data;
};