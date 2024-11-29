// eslint-disable-next-line react/prop-types
const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-primary-light p-4 rounded-md shadow-sm max-w-96">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-secondary-dark text-lg font-semibold">{title}</h3>
        <p className="text-accent mt-2 text-xl font-bold">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
