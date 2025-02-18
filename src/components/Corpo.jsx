import './Corpo.css'

function Corpo() {
    function alertaUsuario() {
        alert('isso é um alert')
    }
    return (
        <div className='container-corpo'>
            <h1>Desbravando o React</h1>
            <p>Vamos começar nossa aventura!</p>
            <button onClick={alertaUsuario}>Alerta</button>
            <img onClick={alertaUsuario} className='imagem' src='M87 BLACK HOLE.jpg' alt='imagem' />
        </div>
    )
}
export default Corpo;