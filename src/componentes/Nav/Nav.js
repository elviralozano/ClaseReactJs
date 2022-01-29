import './Nav.scss'

export const Nav = () =>{

    return (
        <header className="header">
        
        <h1 className="Header__titulo">Amazonas</h1>

        <nav className="Header__Nav">
            <p className="Header__Nav--Item">Quiénes somos</p>
            <p className="Header__Nav--Item">Recomendaciones</p>
            <p className="Header__Nav--Item">Libros</p>
        </nav>
        
        </header>
    )
}