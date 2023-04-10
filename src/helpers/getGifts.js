
export const getGifts = async (search) =>{
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9O32uhJzcEO0JQE7jxoY06j3JwIfNm30&q=${search}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifts = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifts;
}