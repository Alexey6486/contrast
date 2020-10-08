import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://188.93.211.254/api/v1/',
});

export type PaintingType = {
    name: string
    width: string
    height: string
}
export type ApiPaintingsData = {
    data: {
        paintings: {
            items: Array<PaintingType>
        }
    }
}

export const api = {
    getAllPaintings() {
        return instance
            .get<ApiPaintingsData>('paintings')
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error.message);
            })
    },
    getPainting(id: string) {
        return instance
            .get<ApiPaintingsData>(`painting/${id}`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error.message);
            })
    },
};
