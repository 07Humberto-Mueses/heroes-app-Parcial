
// Se agrega la tarjeta que contiene la imagen y el titulo 
export const GifItem = ( {title, url, id} ) => {
  
    return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
