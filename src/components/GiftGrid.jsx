import PropTypes from 'prop-types';
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GridItem } from "./GridItem";

export const GiftGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifts( category );
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map((img) => (
                        <GridItem 
                            key={ img.id } 
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired,
}