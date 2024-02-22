import ProductComponent from './ProductComponent';
import axios from 'axios'; 
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';  // Make sure to import useDispatch from 'react-redux'
import { setProducts } from '../redux/actions/productAction';
const ProductList = () => {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch((error) => {
            console.log('Error' ,error)
            })
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
       <ProductComponent/>
    )
}
export default ProductList;
