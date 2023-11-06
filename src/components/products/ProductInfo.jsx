import { Modal, Typography } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment'
import ItemCount from "../common/ItemCount";
import { memo, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";


function areEqual(prevProps, nextProps){
    return(
        prevProps.product === nextProps.product &&
        prevProps.open === nextProps.open
    );
}

const ProductInfo = ({ product, open, setOpen }) => {
    const { id, image, title, price, isAnOffer, itHasDues, stock } = product
    const {addToCart} = useContext(CartContext)
    const [quantityInCart, setQuantityInCart] = useState(0);


    const handleClose = () => {
        setOpen(prev => !prev)
    }



    const handleAddToCart = (count) => {
        setQuantityInCart(count);
        console.log('agregado', count)
        if(count>0){
            addToCart({
                id, title, image, price, quantity: count
            })
        }
    };

    return (<>
        <Modal open={true} onClose={handleClose}>
            <div className="modal-content">
            <img src={image} className="modal-image" alt="Producto" />
                <Typography variant="h4">{title}</Typography>
                <Typography variant="h6" color="primary"> ${price.toFixed(2)}</Typography>
                <Typography>stock: {stock}</Typography>
                <div className="modal-scroll-content">
                    <Typography variant="body2" color="textSecondary">
                        {
                            itHasDues && (<>
                                <PaymentIcon /> Hasta tres cuotas sin interés </>)

                        }
                    </Typography>
                    <ItemCount stock={stock} initial={quantityInCart} onAdd={handleAddToCart} />
                </div>
            </div>
        </Modal>
    </>);
}

export default memo(ProductInfo, areEqual);