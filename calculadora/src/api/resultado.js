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
