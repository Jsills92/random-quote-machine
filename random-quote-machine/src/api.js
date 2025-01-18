export const fetchRandomBibleVerse = async () => {
    const apiKey = '93d726ddaf72dfac14c3cd0c23eb5129';
    const url = 'https://scripture.api.bible/v1/bibles/en-kyiv_nt/verses/random';

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching Bible verse:', error);
    }
};
