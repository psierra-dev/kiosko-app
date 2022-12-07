import Commerce from '@components/Cliente/Inicio/Commerce/Commerce';
import Presentation from '@components/Cliente/Inicio/Presentation/Presentation';
import Products from '@components/Cliente/Inicio/Products/Products';
import Order from '@components/Cliente/Order/Order';

import useLocation from '@hooks/useLocation';



const Inicio = () => {  
   // useLocation()

    return (
        <>
            <Presentation />
            <Commerce />
            <Products />
            <Order />
        </>
    )
}

/*export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${API_BASE_URL}/store/getstore`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}*/

export default Inicio;
