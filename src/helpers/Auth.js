export const isAuthenticated = () => {
    return localStorage.getItem('logado') ? true : false
}

export const authenticate = () => {
    localStorage.setItem('logado', true);
}

export const disconnect = () => {
    localStorage.removeItem('logado');
}