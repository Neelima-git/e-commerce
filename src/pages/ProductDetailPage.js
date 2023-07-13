import ProductDetails from '../features/product/components/productDetails'
import Navbar from '../features/navbar/Navbar'

export default function ProductDetailPage() {
    return (
        <div>
            <Navbar>
                <ProductDetails></ProductDetails>
            </Navbar>
        </div>
    )
}
