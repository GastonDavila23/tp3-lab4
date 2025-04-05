import './Card.sass'
const Card = ({
    instrumentoImagen = '',
    instrumentoTitulo = '',
    instrumentoPrecio = '',
    instrumentoEnvio = '',
    instrumentoVendidos = ''
}) => {

    return (
        <div className='card-container p-5 mt-3'>
            <div className='card-image mt-3'>
            <img
                className='card-image'
                src={`./images/${instrumentoImagen}`}
                alt={instrumentoImagen} 
            />
            </div>
            <div className='card-info'>
                <h1 className='card-titulo m-0'>{instrumentoTitulo}</h1>
                <p className='card-precio m-0'>${instrumentoPrecio}</p>
                <p className='card-envio m-0 ms-2'>Costo de Envio Interior de Argentina: ${instrumentoEnvio}</p>
                <p className='card-vendidos m-0'>{instrumentoVendidos} vendidos</p>
            </div>
        </div>
    )
}

export default Card
