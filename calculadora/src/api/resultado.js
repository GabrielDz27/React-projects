//ai tem que colocar a url do back
export async function enviarResultado(resultado) {
    try {
        const response = await fetch('http://localhost:3001/resultados', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ resultado }),
        });

        if (!response.ok) throw new Error('Erro ao enviar resultado');

        const data = await response.json();
        return data; // retorna histórico ou confirmação
    } catch (error) {
        console.error('Falha no envio:', error);
        return null;
    }
}

export async function buscarHistorico() {
    try {
        const response = await fetch('http://localhost:3001/resultados');
        if (!response.ok) throw new Error('Erro ao buscar histórico');
        const data = await response.json();
        return data.historico;
    } catch (error) {
        console.error(error);
        return [];
    }
}

// acho interessante fazer isso :

const BASE_URL = 'http://localhost:3001'; // URL do backend
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
};

export async function post(endpoint, body) {
    try{
        const response = await fetch(`${BASE_URL}${endpoint}`,{
            method: 'POST',
            headers: DEFAULT_HEADERS,
            body: JSON.stringify(body),
        });
    } catch (erro) {
        console.log(erro);
        return null;
    }
}
///post('/resultados', { resultado: res });


// GET genérico
export async function get(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'GET',
            headers: DEFAULT_HEADERS,
        });
        if (!response.ok) throw new Error('Erro na requisição GET');
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

// PUT genérico
export async function put(endpoint, body) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'PUT',
            headers: DEFAULT_HEADERS,
            body: JSON.stringify(body),
        });
        if (!response.ok) throw new Error('Erro na requisição PUT');
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

// DELETE genérico
export async function del(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'DELETE',
            headers: DEFAULT_HEADERS,
        });
        if (!response.ok) throw new Error('Erro na requisição DELETE');
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}
