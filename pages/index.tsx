import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getAllPaintingsAC} from "../src/redux/paintingsReducer";
import Link from 'next/link';
import {api, ApiPaintingsData} from "../src/api/api";
import {GetStaticProps} from 'next'

const Home = ({paintingsArr}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPaintingsAC(paintingsArr));
    }, []);

    const itemsInitMap = paintingsArr.map(item => <Link key={item.name} href={'/painting'}><a style={{display: "block"}}>{item.name}</a></Link>)

    return (
        <div>
            {itemsInitMap}
        </div>
    )
}

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {

    const data: ApiPaintingsData | void = await api.getAllPaintings();
    const paintingsArr = data && data.data.paintings.items;

    return {
        props: {
            paintingsArr,
        },
    }
}
