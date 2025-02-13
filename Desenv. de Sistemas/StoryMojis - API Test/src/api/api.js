import axios from 'axios';

const API_KEY = 'sk-919335ec3dc742588baa44476a3c70bb';
const API_URL = 'https://api.deepseek.com/v1/chat/completions';

export async function generateStory(history) {
    if (history.length === 0) return 'Role os dados para começar a história!';

    const prompt = `Crie uma história curta e divertida baseada nestes emojis: ${history.join(' ')}`;

    try {
        const response = await axios.post(API_URL, {
            model: 'deepseek-chat',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 200
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Resposta da API:', response.data); 

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Erro ao gerar história:', error.response ? error.response.data : error.message);
        return 'Ocorreu um erro ao gerar a história. Tente novamente!';
    }
}