
export const getGifs = async (category) => {
  try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=5oGFpTQ5cyocJOkBbPf9H9sKBdLDeeJr&q=${category}&limit=6`;
      const resp = await fetch(url);

      if (!resp.ok) {
          console.log('Error en la petición a la API.');
      }

      const { data } = await resp.json();

      if (data.length === 0) {
        return [
          {
            id: "default",
            title: "No se encontro el gif",
            url: "No se encontro el url",
          },
        ];
      }

      const gifs = data.map(img => ({
          id: img.id,
          title: img.title || 'Sin título',
          url: img.images?.downsized_medium?.url || 'https://via.placeholder.com/300x200?text=Sin+Imagen',
      }));

      return gifs;

  } catch (error) {
      console.error('Ocurrió un error:', error.message);
      return [];
  }
};

