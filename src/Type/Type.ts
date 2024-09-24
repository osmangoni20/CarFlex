type CTA = {
    text: string;
    url: string;
  };
  
  export type TFeatured = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    cta: CTA;
  };
  export type TTestimonial = {
    id: number;
    name: string;
    rentedCar: string;
    feedback: string;
    rating: number; // Rating out of 5
    imageUrl: string; // Path to customer image
  };
 export type TBenefitsData = {
    id: number;
    title: string;
    description: string;
    iconUrl: string;
// Optional, as not every item may have a CTA
  };

  export type TCar = {
    id: number;
    carId:string;
    brand: string;
    rating: number,
    model: string;
    year: number;
    pricePerDay: number;
    imageUrl: string; // URL or path to the image
    transmission: "Automatic" | "Manual";
    fuelType: "Petrol" | "Diesel" | "Electric";
    passengers: number;
    luggage: number;
    airConditioning: boolean;
    mileage: number | "Unlimited"; // Can be either a number for limited mileage or "Unlimited"
    availability: boolean; // true if the car is available for rent
  };