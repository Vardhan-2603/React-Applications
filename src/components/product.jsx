

function product(Props){

    let {productId,name,price,brand,description,image}=Props.product;

    return(
        <div className="max-w-100 text-center bg-amber-200 m-4 p-20">
            <p>{name}</p>
            <p>{price}</p>
            <p>{brand}</p>
            <p>{description}</p>
            <img className="" src={image} alt="Image" />
        </div>
    );
}

export default product;


// update marks state by inserting begining,ending, and in between the index
// delete marks state at the end of the array