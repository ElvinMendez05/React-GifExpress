
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=9x7w0RRwuoFNg4ioD7H1g6ntVcyUm0Hf&q=${category}&limit=15`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(img => ({ 
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    return gifs;
}
