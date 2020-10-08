import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getAllPaintingsAC} from "../src/redux/paintingsReducer";
import Link from 'next/link';
import {api, ApiAllPaintingsData, PaintingType} from "../src/api/api";
import {GetStaticProps} from 'next'

const Home = ({paintingsArr}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPaintingsAC(paintingsArr));
    }, []);

    const itemsInitMap = paintingsArr
        .map((item: PaintingType) => <Link key={item.name} href="/painting/[id]" as={`/painting/${item.id}`}>
                <a style={{display: "block"}}>{item.name}</a>
            </Link>
        )

    return (
        <div>
            {itemsInitMap}
        </div>
    )
}

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {

    const data: ApiAllPaintingsData | void = await api.getAllPaintings();
    const paintingsArr = data && data.data.paintings.items;

    return {
        props: {
            paintingsArr,
        },
    }
}
