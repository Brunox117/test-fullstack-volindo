import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
});

export const getNotas = async () => {
    try{
        const response = await api.get('/notes');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const crearNotas = async (title: string, content: string) => {
    try{
        const response = await api.post('/notes?title=' + title + '&content=' + content);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const borrarNotas = async (id: number) => {
    try{
        const response = await api.delete(`/notes/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const editarNotas = async (id: number, title: string, content: string) => {
    try{
        const response = await api.put(`/notes/${id}`, {title, content});
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getNota = async (id: number) => {
    try{
        const response = await api.get(`/notes/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


