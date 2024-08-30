export const links = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "About",
		path: "/about",
	},
	{
		name: "Services",
		path: "/services",
	},
	{
		name: "Portfolio",
		path: "/portfolio",
	},
	{
		name: "Shop",
		path: "/shop",
	},
	{
		name: "Contact",
		path: "/contact",
	},
];

export const farmProduce = [
	{
		id: 1,
		name: "Fresh Tomatoes",
		description:
			"Organic and freshly picked tomatoes, perfect for salads and cooking.",
		price: 2.99,
		imageUrl: require("./assets/ProductGalleryImages/pngwing.com (58).png"),

		category: "Vegetables",
		stock: 50,
		discount: 10,
	},
	{
		id: 2,
		name: "Golden Potatoes",
		description:
			"Rich and creamy potatoes, ideal for mashing, roasting, or frying.",
		price: 1.49,
		imageUrl: require("./assets/ProductGalleryImages/pngwing.com (64).png"),
		category: "Vegetables",
		stock: 100,
		discount: 10,
	},
	{
		id: 3,
		name: "Crisp Lettuce",
		description:
			"Fresh and crunchy lettuce, perfect for salads and sandwiches.",
		price: 1.99,
		imageUrl: require("./assets/ProductGalleryImages/pngwing.com (60).png"),
		category: "Vegetables",
		stock: 80,
		discount: 10,
	},
	{
		id: 4,
		name: "Sweet Strawberries",
		description:
			"Juicy and sweet strawberries, great for desserts or snacking.",
		price: 4.99, // Price per pint or per basket
		imageUrl: require("./assets/ProductGalleryImages/pngwing.com (59).png"),
		category: "Fruits",
		stock: 40,
		discount: 10,
	},
	{
		id: 5,
		name: "Farm Fresh Eggs",
		description: "Free-range eggs with rich, flavorful yolks.",
		price: 3.99, // Price per dozen
		imageUrl: require("./assets/ProductGalleryImages/pngwing.com (63).png"),
		category: "Dairy",
		stock: 60, // Stock available in dozens
		discount: 10,
	},
	{
		id: 6,
		name: "Raw Honey",
		description:
			"Pure, raw honey sourced from local bees, full of natural sweetness.",
		price: 8.99, // Price per jar
		imageUrl: require("./assets/ProductGalleryImages/pngwing.com (58).png"),
		category: "Condiments",
		stock: 25,
		discount: 10,
	},
	{
		id: 7,
		name: "Whole Milk",
		description: "Creamy whole milk from grass-fed cows.",
		price: 2.49, // Price per liter
		imageUrl: require("./assets/ProductGalleryImages/pngwing.com (63).png"),
		category: "Dairy",
		stock: 100,
		discount: 10,
	},
	{
		id: 8,
		name: "Golden Corn",
		description:
			"Fresh corn on the cob, sweet and tender, great for grilling or boiling.",
		price: 1.25, // Price per ear
		imageUrl: require("./assets/ProductGalleryImages/pngwing.com (61).png"),
		category: "Vegetables",
		stock: 75, // Stock available in ears
		discount: 10,
	},
	{
		id: 9,
		name: "Juicy Oranges",
		description: "Bright and juicy oranges, packed with vitamin C.",
		price: 3.99, // Price per bag
		imageUrl: require("./assets/ProductGalleryImages/pngwing.com (62).png"),
		category: "Fruits",
		stock: 50, // Stock available in bags
		discount: 10,
	},
	{
		id: 10,
		name: "Organic Spinach",
		description:
			"Fresh organic spinach, perfect for salads, smoothies, and cooking.",
		price: 2.99, // Price per bunch
		imageUrl: require("./assets/ProductGalleryImages/pngwing.com (60).png"),
		category: "Vegetables",
		stock: 40, // Stock available in bunches
		discount: 10,
	},
];

export const farmersData = [
	{
		id: 1,
		name: "John Doe",
		role: "Head Farmer",
		experience: "10 years",
		description:
			"John is the lead farmer with a decade of experience in sustainable farming practices. He specializes in organic crop production and livestock management.",
		image: require("./assets/TeamImage/team-1-1-1.png"),
	},
	{
		id: 2,
		name: "Jane Smith",
		role: "Crop Specialist",
		experience: "7 years",
		description:
			"Jane has extensive knowledge in crop rotation, soil management, and pest control. She ensures that our farm produces the best quality crops.",
		image: require("./assets/TeamImage/team-1-2-1.png"),
	},
	{
		id: 3,
		name: "Tom Brown",
		role: "Livestock Manager",
		experience: "8 years",
		description:
			"Tom oversees the care and management of our livestock. His expertise in animal husbandry ensures the health and well-being of all farm animals.",
		image: require("./assets/TeamImage/team-1-3-1.png"),
	},
	{
		id: 4,
		name: "Emily Davis",
		role: "Irrigation Expert",
		experience: "5 years",
		description:
			"Emily is responsible for the irrigation systems on the farm. Her work ensures that our crops receive the right amount of water at the right time.",
		image: require("./assets/TeamImage/team-1-2-1.png"),
	},
];

export const testimonials = [
	{
		name: "Sarah M.",
		location: "Springfield",
		quote:
			"The freshness of the produce is unmatched! I’ve never tasted vegetables this good. Plus, knowing it's all organic gives me peace of mind.",
		image: require("./assets/Testimonial/member-1.png"),
	},
	{
		name: "James L.",
		location: "Riverdale",
		quote:
			"I switched to this farm for my weekly groceries, and it’s been a game-changer. The quality and flavor of their products are fantastic!",
		image: require("./assets/Testimonial/member-2.png"),
	},
	{
		name: "Rebecca K.",
		location: "Hillside",
		quote:
			"From farm to table, the process is seamless and the results are delicious. I love supporting local farmers who prioritize sustainability.",
		image: require("./assets/Testimonial/member-3.png"),
	},
	{
		name: "Daniel T.",
		location: "Lakeside",
		quote:
			"I used to buy organic from the supermarket, but nothing compares to the produce I get here. The freshness is incredible, and the variety is great too.",
		image: require("./assets/Testimonial/member-4.png"),
	},
	{
		name: "Emily R.",
		location: "Green Valley",
		quote:
			"Every delivery feels like a box of health! My family loves the seasonal fruits and veggies. We feel healthier and more connected to where our food comes from.",
		image: require("./assets/Testimonial/member-5.png"),
	},
];


export const faqs = [
	{
		question: "What types of produce do you grow?",
		answer:
			"We grow a wide variety of fresh produce, including organic vegetables, fruits, and herbs. Our selection varies by season, ensuring that you get the freshest and most nutritious products directly from our farm.",
	},
	{
		question: "Do you offer farm tours?",
		answer:
			"Yes, we offer guided farm tours where you can learn about our sustainable farming practices, meet the animals, and experience farm life firsthand. Tours are available by appointment, so please contact us to schedule your visit.",
	},
	{
		question: "Can I buy your products online?",
		answer:
			"Absolutely! You can purchase our fresh produce, dairy, and handmade products through our online store. We offer local delivery and farm pickup options to ensure that you receive your order at its peak freshness.",
	},
	{
		question: "How do you ensure the quality of your produce?",
		answer:
			"We prioritize quality by adhering to organic farming practices, using natural pest control methods, and regularly rotating crops. Our produce is handpicked at the peak of ripeness and immediately packed to maintain its freshness and flavor.",
	},
	{
		question: "Do you offer any educational programs?",
		answer:
			"Yes, we offer a range of educational programs for all ages, including workshops on organic farming, gardening, and sustainability. We also host school field trips and community events to educate and engage with our local community.",
	},
];

