import Image from "next/image";

const FoodCard = ({ food }) => {
    return (
        <div className="card bg-base-100 shadow-sm border">
            <figure>
                <Image
                    src={food.image_link}
                    alt={food.dish_name}
                    width={352}
                    height={350}
                    className="w-full h-auto"
                    loading="eager"
                />
            </figure>


            <div className="card-body">
                <h2 className="card-title">{food.dish_name}</h2>

                <p>{food.cuisine}</p>

                <div className="flex justify-between">
                    <span>⭐ {food.rating}</span>
                    <span className="font-bold">৳{food.price}</span>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;