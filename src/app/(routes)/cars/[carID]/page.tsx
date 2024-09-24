'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @next/next/no-async-client-component
export default async function CarDetails() {
//   const router = useRouter();
    const {carID}=useParams()
    const car=await fetchCarDetails(carID)
  if (!car) {
    return <p>Loading...</p>;
  }

  return (
    <div >
     
     <div className='flex justify-around items-center'>
     <div className='max-w-[450px] rounded-2xl shadow-md p-5 '>
        {/* Car Images */}
      <div className="w-full">
        <Image src={car.imageUrl} alt={car.model} width={400} height={400}  />
      </div>

      {/* Car Information Section */}
      <div className="px-0">
        <p className='text-sm font-medium text-gray-600'>{car.model}</p>
        <div className='flex justify-between items-center'>
        <h1 className='text-2xl py-2 font-bold text-[#4E6D7D]'>{car.brand}</h1>
        <p className='text-2xl text-[#4E6D7D] font-sans'>{`${car.rating}`}</p>
        </div>
        <div className='flex justify-between py-2 border-b-2 border-b-[#4E6D7D] '>
            <p>Transmission: </p>
            <p>{car.transmission}</p>
        </div>
        <div className='flex justify-between text-semibold py-2 border-b-2 border-b-[#4E6D7D] '>
            <p>Year: </p>
            <p>{car.year}</p>
        </div>
       
        <div className='flex justify-between text-medium py-2 border-b-2 border-b-[#4E6D7D] '>
            <p>Fuel Type: </p>
            <p>{car.fuelType}</p>
        </div>
        <div className='flex justify-between text-medium py-2 border-b-2 border-b-[#4E6D7D] '>
            <p>Passengers:  </p>
            <p>{car.passengers}</p>
        </div>
        <div className='flex justify-between text-medium py-2 border-b-2 border-b-[#4E6D7D] '>
            <p>Air Conditioning:  </p>
            <p>{car.airConditioning?"Yes":"No"}</p>
        </div>
        <div className='flex justify-between text-medium py-2 border-b-2 border-b-[#4E6D7D] '>
            <p>Luggage:  </p>
            <p>{car.luggage}</p>
        </div>
        <div className='flex justify-between text-[#4E6D7D] text-medium py-2 '>
            <p>Price Per Day:  </p>
            <p>{car.pricePerDay}</p>
        </div>
     </div>
      </div>
    <div>
    {
        <div className="max-w-[600px] bg-white rounded-md px-5 py-2">
        <h2 className="text-['#47B1C2'] font-['Open_Sans'] text-5xl font-semibold text-center py-4 text-black">Reserve a Vehicle
        </h2>
        <div>
            <form className="text-md font-semibold">
                <div>
                <label>Pick-up & Return Location (ZIP, City or Airport)*</label>
                <input placeholder="Provide a Pickup Location" className="ring-1 ring-inset font-extralight p-2 focus:ring-[#275F6F] ring-gray-300 w-full my-2 h-[50px] border-2 border-[#65D6E7] rounded-lg" type="text"></input>
                </div>
                <div>
                <label>Return Location (ZIP, City or Airport)*</label>
                <input placeholder="Provide Return Location" className="ring-1 ring-inset font-extralight p-2 focus:ring-[#275F6F] ring-gray-300 w-full my-2 h-[50px] border-2 border-[#65D6E7] rounded-lg" type="text"></input>
                </div>
                <div className="flex justify-between items-center flex-wrap gap-2">
                <label>Total Traveler</label>
                <input className=" h-[50px] ring-1 ring-inset font-extralight p-2 focus:ring-[#275F6F] w-full border-2 border-[#65D6E7] rounded-md" type="number"></input>
                <label>PickUp Date*</label>
                <input  className="h-[80px] p-2 font-normal border-2 border-[#65D6E7] rounded-md" type="date"></input>
                
                <label>Return Date*</label>
                <input className=" h-[80px] p-2 font-normal border-2 border-[#65D6E7] rounded-md" type="date"></input>
               
                </div>
                
            </form>

            <div className="flex justify-center items-center ">
                <Button className="px-10 rounded-lg my-8 py-6 text-white bg-[#47B1C2] text-xl font-semibold">Browse Vehicles</Button>
            </div>
        </div>
    </div>
       }
    </div>
     </div>
      {/* Booking Section */}
      <div className="booking-section mt-52">
        <h2>Book this Car</h2>
        {car.availability ? (
          <>
            <p>This car is available for rent.</p>
            <Link href="/checkout">
           
             <Button className="book-btn" value={"default"}>Book Now</Button>
            </Link>
          </>
        ) : (
          <p>Sorry, this car is currently unavailable.</p>
        )}
      </div>

      {/* Back to Car Listings */}
      <div className="back-link">
        <Link href="/car-list">
          Back to Car Listings
        </Link>
      </div>

      
    </div>
  );
}

// This would be dynamic, you would fetch this data from an API or database
// eslint-disable-next-line @typescript-eslint/no-explicit-any


// Placeholder function for fetching car details (replace with actual API call)
const fetchCarDetails = async (carId: string) => {
  const cars = [
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
    // Add more car details here...
  ];

  return cars.find(car => car.carId === carId);
};
