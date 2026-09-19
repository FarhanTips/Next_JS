import Image from "next/image";


const FoodDetailPage = async ({ params }) => {
    const { slug } = await params;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${slug}`);
    const data = await res.json();

    const food = data.data;
    return (
        <div className="max-w-4xl mx-auto p-6">

            {/* Image */}
            <div className="mb-6">

                <Image
                    src={food.image_link}
                    alt={food.dish_name}
                    width={352}
                    height={350}
                    className="w-full max-h-96 object-contain rounded-xl"
                    loading="eager"
                />

            </div>

            {/* Basic Information */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">
                    {food.dish_name}
                </h1>

                <p className="text-lg">
                    <span className="font-semibold">Cuisine:</span>{" "}
                    {food.cuisine}
                </p>

                <p>
                    <span className="font-semibold">Category:</span>{" "}
                    {food.category}
                </p>

                <div className="flex gap-6 mt-3">
                    <span>⭐ {food.rating}</span>
                    <span className="font-bold">৳{food.price}</span>
                </div>
            </div>

            {/* Alternative Names */}
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">
                    Alternative Names
                </h2>

                <ul className="list-disc list-inside">
                    {food.alternative_names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            </div>

            {/* Ingredients */}
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">
                    Main Ingredients
                </h2>

                <ul className="list-disc list-inside">
                    {food.main_ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>

            {/* Nutrition */}
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-3">
                    Approximate Nutrition Per Serving
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    <div className="border rounded-lg p-3">
                        <p className="font-semibold">Calories</p>
                        <p>{food.approximate_nutrition_per_serving.calories}</p>
                    </div>

                    <div className="border rounded-lg p-3">
                        <p className="font-semibold">Protein</p>
                        <p>{food.approximate_nutrition_per_serving.protein}</p>
                    </div>

                    <div className="border rounded-lg p-3">
                        <p className="font-semibold">Carbohydrates</p>
                        <p>
                            {food.approximate_nutrition_per_serving.carbohydrates}
                        </p>
                    </div>

                    <div className="border rounded-lg p-3">
                        <p className="font-semibold">Fat</p>
                        <p>{food.approximate_nutrition_per_serving.fat}</p>
                    </div>

                    <div className="border rounded-lg p-3">
                        <p className="font-semibold">Fiber</p>
                        <p>{food.approximate_nutrition_per_serving.fiber}</p>
                    </div>
                </div>
            </div>

            {/* Price in Dhaka */}
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-3">
                    Possible Price in Dhaka
                </h2>

                <div className="space-y-2">
                    <p>
                        <span className="font-semibold">Home Cooked:</span>{" "}
                        {food.possible_price_in_dhaka.home_cooked}
                    </p>

                    <p>
                        <span className="font-semibold">
                            Street Food / Small Restaurant:
                        </span>{" "}
                        {food.possible_price_in_dhaka.street_food_or_small_restaurant}
                    </p>

                    <p>
                        <span className="font-semibold">
                            Cafe / Healthy Eatery:
                        </span>{" "}
                        {food.possible_price_in_dhaka.cafe_or_healthy_eatery}
                    </p>
                </div>
            </div>

            {/* Origin */}
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">
                    Origin & Popularity
                </h2>

                <p>{food.origin_and_popularity}</p>
            </div>

            {/* Cooking Steps */}
            <div>
                <h2 className="text-xl font-bold mb-3">
                    Cooking Steps
                </h2>

                <ol className="list-decimal list-inside space-y-3">
                    {food.cooking_steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>

        </div>
    );
};

export default FoodDetailPage;