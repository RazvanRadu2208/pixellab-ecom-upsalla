import { cartContext } from '@/contexts';
import { useCartActions} from '@/hooks/cart';
import { useContext } from 'react';
import { Loading } from '.';

export const AddToCart = ({ product }) => {
    const { title, id } = product;
    const { AddToCart, adding, removeFromCart, removing} = useCartActions();
    const { cartProducts } = useContext(cartContext);
    let cartQuantity = 0;

    const cartProduct = cartProducts.find(({ productId }) => {
        return id === productId;
    });

    if (cartProduct) {
        cartQuantity = cartProduct.quantity;
    }

    const isProductInCart = !!cartProduct;

    const onClick = () => {
        isProductInCart ? removeFromCart(id, cartQuantity) : addToCart(id);
    };

    const busy = adding || removing;

    return (
        <button type='button'
        className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-600 transition-colors relative text-nowrap"
        disabled={busy} 
        title={isProductInCart ? `Remove ${title} from cart` : `Add ${title} to cart`
    }
    onClick={onClick}
    >
        {busy ? (
            <Loading />
        ) : isProductInCart ? (
            'Remove from Cart'
        ) : (
            'Add to Cart'
        )}
    </button>
    );
};