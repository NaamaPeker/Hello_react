import react from 'react';

interface ProductCardProps{
    name: string
    price: string
    imageUrl: string
}

export const ProductCard: React.FC<ProductCardProps> = ({name, price, imageUrl}) =>{
    return (
        <div>
            product info
            Name: {name}
            Price: {price}
            imageURL: <img src={imageUrl}/>
        </div>
    )
}
export default ProductCard;