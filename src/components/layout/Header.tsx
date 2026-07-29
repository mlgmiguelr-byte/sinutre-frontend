import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  drawerId?: string;
  username?: string;
  avatarUrl?: string;
}

export function Header({ drawerId, username, avatarUrl }: HeaderProps) {
  const navigate = useNavigate();

  function handleLogout() {
    // Limpa os dados de login salvos
    localStorage.clear();
    // Redireciona para a tela de login
    navigate('/login');
  }

  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-3">
        {drawerId && (
          <div className="drawer-button lg:hidden">
            <label htmlFor={drawerId} className="btn btn-square btn-ghost drawer-button" aria-label="Abrir menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
        )}

        <div className="avatar shrink-0">
          <div className="w-10 h-10 rounded-full border border-base-300">
            <img src={avatarUrl} alt={`Avatar de ${username}`} />
          </div>
        </div>

        <h1 className="text-base lg:text-4xl font-bold tracking-tight">
          Bem vindo, {username}!
        </h1>
      </div>

      {/* Botão Sair / Logout */}
      <button
        onClick={handleLogout}
        className="btn btn-error btn-outline btn-sm font-medium"
      >
        Sair
      </button>
    </header>
  );
}