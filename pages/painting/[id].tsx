import Link from "next/link";
import {api, ApiAllPaintingsData, ApiPaintingData, PaintingType} from "../../src/api/api";
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from "next";

const Painting = ({painting}: InferGetStaticPropsType<typeof getStaticProps>) => {

    const {} = painting;

    return (
        <div>
            Painting:
            <div>Name: {painting.name}</div>
            <div>Width: {painting.width}</div>
            <div>Height: {painting.height}</div>
            <Link href={'/'}><a>Get Back</a></Link>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const data: ApiAllPaintingsData | void = await api.getAllPaintings();
    const paintings = data && data.data.paintings.items

    return {
        paths: paintings.map(painting => {
            return {params: {id: painting.id}}
        }),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {

    const id =  Array.isArray(context.params.id) ? context.params.id[0] : context.params.id;
    const data: ApiPaintingData | void = await api.getPainting(id);
    const painting = data && data.data.painting;

    return {
        props: {
            painting
        },
    }
}

export default Painting;