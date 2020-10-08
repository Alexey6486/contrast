import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://188.93.211.254/api/v1/',
});

export type PaintingType = {
    id: string
    name: string
    width: string
    height: string
}
export type ApiAllPaintingsData = {
    data: {
        paintings: {
            items: Array<PaintingType>
        }
    }
}
export type ApiPaintingData = {
    data: {
        painting: PaintingType
    }
}

export const api = {
    getAllPaintings() {
        return instance
            .get<ApiAllPaintingsData>('paintings')
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error.message);
            })
    },
    getPainting(id: string) {
        return instance
            .get<ApiPaintingData>(`paintings/${id}`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error.message);
            })
    },
};
