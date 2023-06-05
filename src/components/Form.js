import React,{useState} from 'react';
import ProductDetails from './ProductDetails';
const Form=()=>{
    const[givenId,setGivenId]=useState('');
    const[givenPrice,setGivenPrice]=useState('');
    const[givenProduct,setGivenProduct]=useState('');
    const [productDetails, setProductDetails] = useState([]);
    const idChangeHandler=(event)=>{
        setGivenId(event.target.value);
    }
    const PriceChangeHandler=(event)=>{
        setGivenPrice(event.target.value);
    }
    const nameChangeHandler=(event)=>{
        setGivenProduct(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const ProductForm={
            ProductId:givenId,
            SellingPrice:givenPrice,
            ProductName:givenProduct,
           


        }
        setProductDetails([...productDetails, ProductForm]);
        setGivenId('');
        setGivenPrice('');
        setGivenProduct('');
    };
    const handleDelete = (index) => {
        setProductDetails((prevProductDetails) => {
          const updatedProductDetails = [...prevProductDetails];
          updatedProductDetails.splice(index, 1);
          return updatedProductDetails;
        });
      };
    return(
        <div>
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Product Id:</label>
                    <input type="number" value={givenId} onChange={idChangeHandler} />
                </div>

                <div>
                    <label>Selling Price:</label>
                    <input type="number" value={givenPrice} onChange={PriceChangeHandler}/>
                </div>

                <div>
                    <label>Product Name:</label>
                    <input type="text" value={givenProduct} onChange={nameChangeHandler}/>
                </div>

                <div>
                    <button type="submit">Add Product</button>
                </div>
            </div>
        </form>
        <ProductDetails productDetails={productDetails} onDelete={handleDelete}/>
        </div>
    )

}
export default Form;