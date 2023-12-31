export const ImageApi = async (query) => {
    try {
        const API_URL = `https://pixabay.com/api/?key=37193580-70eee916440b4b912f6a5e4b9${query}`;
        const res = await fetch(API_URL);
        if (!res.ok) {
            throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
