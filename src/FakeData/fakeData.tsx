

import { TBenefitsData, TCar, TFeatured, TTestimonial } from "@/Type/Type";

export const featuredData:TFeatured[]= [
    {
      id: 1,
      title: "Top Deals of the Month",
      description:
        "Limited-time offers on popular car models. Book now and save big!",
      imageUrl: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3", // Replace with the actual image path
      cta: {
        text: "See Deals",
        url: "/deals",
      },
    },
    {
     
    
      id: 2,
      title: "Popular Cars in Your Area",
      description:
        "Check out the most rented cars near you, tailored for your location.",
      imageUrl: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z", // Replace with the actual image path
      cta: {
        text: "View Cars",
        url: "/popular-cars",
      },
    },
    {
      id: 5,
      title: "Weekend Getaway Specials",
      description:
        "Plan your weekend escape with our special discounted rentals.",
      imageUrl: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z", // Replace with the actual image path
      cta: {
        text: "Plan Your Getaway",
        url: "/weekend-specials",
      },
    },
    {
      
      id: 4,
      title: "Rent After an Accident",
      description: "Need to rent a vehicle after an accident? Let us help you get back on the road.​",
      imageUrl: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z", // Replace with the actual image path
      cta: {
        text: "Go Green",
        url: "/eco-friendly",
      },
    },
   
  ];

 export const testimonials: TTestimonial[] = [
    {
      id: 1,
      name: "John Doe",
      rentedCar: "Sedan",
      carId:"",
      feedback:
        "The whole process was smooth and easy. The car was in excellent condition, and the customer service was outstanding. I will definitely rent from here again!",
      rating: 5,
      imageUrl: "../../public/user1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      rentedCar: "SUV",
      carId:"",
      feedback:
        "Amazing experience! The vehicle was perfect for my family road trip. The pick-up and drop-off locations were so convenient!",
      rating: 4,
      imageUrl: "../../public/user1.jpg",
    },
    {
      id: 3,
      name: "Michael Brown",
      rentedCar: "Luxury Car",
      carId:"",
      feedback:
        "I rented a luxury car for a weekend getaway, and it was worth every penny. The vehicle was clean, comfortable, and in great condition.",
      rating: 5,
      imageUrl: "../../public/user1.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      rentedCar: "Sedan",
      carId:"",
      feedback:
        "The whole process was smooth and easy. The car was in excellent condition, and the customer service was outstanding. I will definitely rent from here again!",
      rating: 5,
      imageUrl: "../../public/user1.jpg",
    },
    {
      id: 5,
      name: "Jane Smith",
      rentedCar: "SUV",
      carId:"",
      feedback:
        "Amazing experience! The vehicle was perfect for my family road trip. The pick-up and drop-off locations were so convenient!",
      rating: 4,
      imageUrl: "../../public/user1.jpg",
    },
  ];
 
  export const benefitsData:TBenefitsData[] = [
    {
      id: 1,
      title: "Wide Selection of Vehicles",
      description: "From economy to luxury cars, we offer a diverse range of vehicles to suit every need and budget. Whether it's a short city trip or a long road journey, we’ve got the perfect car for you.",
      iconUrl: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" // Replace with actual icon path
    },
    {
      id: 2,
      title: "Best Price Guarantee",
      description: "We offer competitive pricing with no hidden fees, ensuring that you get the best deals. Price match options are available if you find a lower rate elsewhere.",
      iconUrl: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" // Replace with actual icon path
    },
    {
      id: 4,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to assist you with any queries or concerns. Whether you're on the road or just booking, we’re here to help.",
      iconUrl: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" // Replace with actual icon path
    },
    {
      id: 7,
      title: "Convenient Pickup & Drop-off Locations",
      description: "We offer multiple locations for car pick-up and drop-off, including airports, city centers, and local spots. Choose the most convenient location based on your itinerary.",
      iconUrl: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" // Replace with actual icon path
    }
  ];
  export const carList:TCar[] = [
    {
      id: 1,
      brand: "Toyota",
      carId:"TS1",
      model: "Camry",
      rating: 5,
      year: 2022,
      pricePerDay: 50,
      imageUrl: "https://i.ibb.co.com/fHS1zm0/single-Car1.jpg", // Replace with actual image path
      transmission: "Automatic",
      fuelType: "Petrol",
      passengers: 5,
      luggage: 2, // Number of luggage bags
      airConditioning: true,
      mileage: "Unlimited", // or use a number for limited mileage
      availability: true, // Indicates if the car is available for rent
    },
    {
      id: 2,
      brand: "Honda",
      carId:"HC1",
      rating:4,
      model: "Civic",
      year: 2021,
      pricePerDay: 45,
      imageUrl: "https://i.ibb.co.com/fXQDq0w/single-Car2.jpg",
      transmission: "Automatic",
      fuelType: "Petrol",
      passengers: 5,
      luggage: 3,
      airConditioning: true,
      mileage: "Unlimited",
      availability: false, // Car is currently unavailable
    },
    {
      id: 3,
      brand: "Ford",
      carId:"FM1",
      rating:4,
      model: "Mustang",
      year: 2020,
      pricePerDay: 80,
      imageUrl: "https://i.ibb.co.com/bsmRb43/single-Car3.jpg",
      transmission: "Manual",
      fuelType: "Petrol",
      passengers: 4,
      luggage: 1,
      airConditioning: true,
      mileage: 200, // Limited mileage, in km or miles
      availability: true,
    },
    {
      id: 4,
      carId:"TM1",
      brand: "Tesla",
      rating:4,
      model: "Model 3",
      year: 2023,
      pricePerDay: 100,
      imageUrl: "https://i.ibb.co.com/pPWfbDL/single-Car5.jpg",
      transmission: "Automatic",
      fuelType: "Electric",
      passengers: 5,
      luggage: 3,
      airConditioning: true,
      mileage: "Unlimited",
      availability: true,
    },
    {
      id: 5,
      carId:"BX20221",
      brand: "BMW",
      rating:5,
      model: "X5",
      year: 2022,
      pricePerDay: 120,
      imageUrl: "https://i.ibb.co.com/GMwDMPH/single-Car4.jpg",
      transmission: "Automatic",
      fuelType: "Diesel",
      passengers: 5,
      luggage: 4,
      airConditioning: true,
      mileage: "Unlimited",
      availability: true,
    },
    {
      id: 6,
      carId:"HE2021-1",
      rating:4,
      brand: "Hyundai",
      model: "Elantra",
      year: 2021,
      pricePerDay: 40,
      imageUrl: "https://i.ibb.co.com/fXQDq0w/single-Car2.jpg",
      transmission: "Automatic",
      fuelType: "Petrol",
      passengers: 5,
      luggage: 2,
      airConditioning: true,
      mileage: "Unlimited",
      availability: false,
    }
  ];
  
