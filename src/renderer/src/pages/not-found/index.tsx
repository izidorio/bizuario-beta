import { Link, useLocation } from 'react-router-dom'

export function NotFound() {
  const { pathname } = useLocation()

  return (
    <div className="p-2">
      <h1>não foi possível acessar o recurso "{pathname}"</h1>
      <Link to="/">
        <p>voltar para Home</p>
      </Link>
    </div>
  )
}
