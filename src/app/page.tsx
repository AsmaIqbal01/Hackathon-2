
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
     
      <section className="first w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center">
<<<<<<< HEAD
        <Image src={"/images/Ads 1.png"} alt="" width={640} height={360} className="max-w-full" />
        <Image src={"/images/Ads 2.png"} alt="" width={640} height={360} className="max-w-full" />
=======
        <Image src={"/Ads 1.png"} alt="" width={640} height={360} className="max-w-full" />
        <Image src={"/Ads 2.png"} alt="" width={640} height={360} className="max-w-full" />
>>>>>>> eb8837d (updated hackathon)
      </section>

    
      <section className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
<<<<<<< HEAD
        <Image src={"/images/Pick - Up.png"} alt="" width={582} height={132} className="max-w-full" />
        <Image src={"/images/Switch.png"} alt="" width={60} height={60} className="max-w-full" />
        <Image src={"/images/Drop - Off.png"} alt="" width={582} height={132} className="max-w-full" />
=======
        <Image src={"/Pick - Up.png"} alt="" width={582} height={132} className="max-w-full" />
        <Image src={"/Switch.png"} alt="" width={80} height={80} className="max-w-full" />
        <Image src={"/Drop - Off.png"} alt="" width={582} height={132} className="max-w-full" />
>>>>>>> eb8837d (updated hackathon)
      </section>

      
      <section className="popular w-full flex flex-col gap-4">
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
<<<<<<< HEAD
                Koenigsegg <Image src={"/images/heart.png"} alt="" width={20} height={20} />
=======
                Koenigsegg <Image src={"/heart.png"} alt="" width={20} height={20} />
>>>>>>> eb8837d (updated hackathon)
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
<<<<<<< HEAD
              <Image src={"/images/car.png"} alt="" width={220} height={68} />
              <Image src={"/images/Specification.png"} alt="" width={256} height={24} />
=======
              <Image src={"/car.png"} alt="" width={220} height={68} />
              <Image src={"/Specification.png"} alt="" width={256} height={24} />
>>>>>>> eb8837d (updated hackathon)
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

         
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
<<<<<<< HEAD
                NissanGT - R <Image src={"/images/heart 2.png"} alt="" width={20} height={20} />
=======
                NissanGT - R <Image src={"/heart 2.png"} alt="" width={20} height={20} />
>>>>>>> eb8837d (updated hackathon)
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
<<<<<<< HEAD
              <Image src={"/images/car (1).png"} alt="" width={220} height={68} />
              <Image src={"/images//Specification.png"} alt="" width={256} height={24} />
=======
              <Image src={"/car (1).png"} alt="" width={220} height={68} />
              <Image src={"/Specification.png"} alt="" width={256} height={24} />
>>>>>>> eb8837d (updated hackathon)
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
<<<<<<< HEAD
                Rolls-Royce <Image src={"/images/heart.png"} alt="" width={20} height={20} />
=======
                Rolls-Royce <Image src={"/heart.png"} alt="" width={20} height={20} />
>>>>>>> eb8837d (updated hackathon)
              </CardTitle>
              <CardDescription>Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
<<<<<<< HEAD
              <Image src={"/images/car.png"} alt="" width={220} height={68} />
              <Image src={"/images/Specification.png"} alt="" width={256} height={24} />
=======
              <Image src={"/car.png"} alt="" width={220} height={68} />
              <Image src={"/Specification.png"} alt="" width={256} height={24} />
>>>>>>> eb8837d (updated hackathon)
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

     
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
<<<<<<< HEAD
                NissanGT - R <Image src={"/images/heart 2.png"} alt="" width={20} height={20} />
=======
                NissanGT - R <Image src={"/heart 2.png"} alt="" width={20} height={20} />
>>>>>>> eb8837d (updated hackathon)
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
<<<<<<< HEAD
              <Image src={"/images/car (1).png"} alt="" width={220} height={68} />
              <Image src={"/images/Specification.png"} alt="" width={256} height={24} />
=======
              <Image src={"/car (1).png"} alt="" width={220} height={68} />
              <Image src={"/Specification.png"} alt="" width={256} height={24} />
>>>>>>> eb8837d (updated hackathon)
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>
        </div>
      </section>


      <section className="popular w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
<<<<<<< HEAD
                All New Rush <Image src={"/images/heart.png"} alt="" width={20} height={20} />
=======
                All New Rush <Image src={"/heart 2.png"} alt="" width={20} height={20} />
>>>>>>> eb8837d (updated hackathon)
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
<<<<<<< HEAD
              <Image src={"/images/suv.png"} alt="" width={220} height={68} />
              <Image src={"/images/Specification.png"} alt="" width={256} height={24} />
=======
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Specification.png"} alt="" width={256} height={24} />
>>>>>>> eb8837d (updated hackathon)
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
<<<<<<< HEAD
                CR - V <Image src={"/images/heart 2.png"} alt="" width={20} height={20} />
=======
                CR - V <Image src={"/heart.png"} alt="" width={20} height={20} />
>>>>>>> eb8837d (updated hackathon)
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
<<<<<<< HEAD
              <Image src={"/images/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/images/Specification.png"} alt="" width={256} height={24} />
=======
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Specification.png"} alt="" width={256} height={24} />
>>>>>>> eb8837d (updated hackathon)
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
<<<<<<< HEAD
                All New Terios <Image src={"/images/heart.png"} alt="" width={20} height={20} />
=======
                All New Terios <Image src={"/heart 2.png"} alt="" width={20} height={20} />
>>>>>>> eb8837d (updated hackathon)
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
<<<<<<< HEAD
              <Image src={"/images/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/images/Specification.png"} alt="" width={256} height={24} />
=======
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Specification.png"} alt="" width={256} height={24} />
>>>>>>> eb8837d (updated hackathon)
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
<<<<<<< HEAD
                CR - V <Image src={"/images/heart 2.png"} alt="" width={20} height={20} />
=======
                CR - V <Image src={"/heart.png"} alt="" width={20} height={20} />
>>>>>>> eb8837d (updated hackathon)
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
<<<<<<< HEAD
              <Image src={"/images/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/images/Specification.png"} alt="" width={256} height={24} />
=======
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Specification.png"} alt="" width={256} height={24} />
>>>>>>> eb8837d (updated hackathon)
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
<<<<<<< HEAD
                MG ZX Exclusive <Image src={"/images/heart.png"} alt="" width={20} height={20} />
=======
                MG ZX Exclusive <Image src={"/heart.png"} alt="" width={20} height={20} />
>>>>>>> eb8837d (updated hackathon)
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
<<<<<<< HEAD
              <Image src={"/images/suv.png"} alt="" width={220} height={68} />
              <Image src={"/images/Specification.png"} alt="" width={256} height={24} />
=======
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Specification.png"} alt="" width={256} height={24} />
>>>>>>> eb8837d (updated hackathon)
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
<<<<<<< HEAD
                NEW MG ZS <Image src={"/images/heart 2.png"} alt="" width={20} height={20} />
=======
                NEW MG ZS <Image src={"/heart 2.png"} alt="" width={20} height={20} />
>>>>>>> eb8837d (updated hackathon)
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
<<<<<<< HEAD
              <Image src={"/images/suv.png"} alt="" width={220} height={68} />
              <Image src={"/images/Specification.png"} alt="" width={256} height={24} />
=======
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Specification.png"} alt="" width={256} height={24} />
>>>>>>> eb8837d (updated hackathon)
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
<<<<<<< HEAD
                MG ZX Excite <Image src={"/images/heart.png"} alt="" width={20} height={20} />
=======
                MG ZX Excite <Image src={"/heart.png"} alt="" width={20} height={20} />
>>>>>>> eb8837d (updated hackathon)
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
<<<<<<< HEAD
              <Image src={"/images/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/images/Specification.png"} alt="" width={256} height={24} />
=======
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Specification.png"} alt="" width={256} height={24} />
>>>>>>> eb8837d (updated hackathon)
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
<<<<<<< HEAD
                New MG ZS<Image src={"/images/heart 2.png"} alt="" width={20} height={20} />
=======
                New MG ZS<Image src={"/heart 2.png"} alt="" width={20} height={20} />
>>>>>>> eb8837d (updated hackathon)
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
<<<<<<< HEAD
              <Image src={"/images/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/images/Specification.png"} alt="" width={256} height={24} />
=======
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Specification.png"} alt="" width={256} height={24} />
>>>>>>> eb8837d (updated hackathon)
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="button w-full text-center">
        <Link href={"/categories"}>
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}
