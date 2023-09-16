import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Block2() {
  return (
    <>
      <div className="w-full">
        <div className=" flex max-lg:flex-col mx-8 max-sm:mx-2 justify-center max-lg:items-center mb-10 gap-5  py-5 max-sm:py-0 font-mulish bg-[#FFFEF2]  h-auto">
          <div className=" ml-5 w-[397px] max-xl:w-[350px] max-lg:w-full">
            <h1 className="font-[400]">Fragrance</h1>
            <h1 className="mt-1 text-[30px] font-lato font-[400]">
              Our Personal Scents
            </h1>
            <p className="py-4">
              Unorthodox, evocative, and refined, Aesop fragrances are sensory
              bridges to memory and connection points to those around us.
            </p>
            <button className="flex gap-1 py-5 ">
              See all Fragrance <BsArrowRight className="text-center mt-1" />{" "}
            </button>
          </div>
          <div className="w-[25rem]  h-[27rem]">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png"
              alt=""
            />
            <h1 className="text-center hover:underline cursor-pointer">
              Ouranon Eau de Perfum
            </h1>
            <h1 className="text-center   cursor-pointer mt-2">
              Woody, Spicy, resinous
            </h1>
          </div>
          <div className="w-[25rem] max-lg:hidden h-[29rem]">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png"
              alt=""
            />
            <h1 className="text-center hover:underline cursor-pointer">
              Gloam Eau de Perfum
            </h1>
            <h1 className="text-center   cursor-pointer mt-2">
              Floora, Spicy, resinous
            </h1>
          </div>
        </div>
        <div className="border-y mx-24 max-sm:hidden border-red-500 "></div>
        <div className=" h-32 max-lg:h-0 bg-[#FFFEF2]"></div>
        <div className=" flex items-end max-lg:flex-col max-lg:items-center max-lg:gap-1 gap-8  font-mulish bg-[#FFFEF2]  h-auto">
          <div className="w-[42rem] max-lg:w-[80%]  max-sm:w-full pl-20  max-lg:pl-0 max-md:px-4 max-lg:h-[400px] h-[500px]">
            <h1 className="font-[400]">Parsley Seed Skin Care</h1>
            <h1 className="mt-5 text-[30px] max-sm:text-[25px] font-lato font-[400]">
              In warm or humid urban settings, skin is vulnerable to a range of
              environmental factors.
            </h1>
            <p className="flex gap-1 py-5 ">
              Pollution, air-conditioning and the stresses of city life can
              heighten skin’s susceptibility to free radical damage and
              dehydration. Anti-oxidant rich Parsley Seed formulations help to
              support skin against these effects.
            </p>
            <button className="border border-slate-400 mt-2 hover:text-white hover:bg-[#333333] px-3 flex  gap-2 py-5">
              Regimens for warm climates{" "}
              <BsArrowRight className="text-center mt-[4px]" />{" "}
            </button>
          </div>
          <div className=" h-36 max-lg:h-4 bg-[#FFFEF2]"></div>
          <div className="w-full  max-sm:px-4  bg-[#FFFEF2] pl-20  ">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/7tPk6zFo84MiOR6dy8WNAg/1f71197de94be5fb07cbd03365132775/Aesop-Parsley-Seed-Performance-Campaign-2020-Hybris-Homepage-Secondary-1-Mid-Desktop-1690x1185px.jpg"
              alt=""
            />
          </div>
        </div>

        <div className=" h-36 max-lg:h-4 bg-[#FFFEF2]"></div>
        <div className=" flex flex-row-reverse mx-8 max-sm:mx-4 gap-10 max-lg:items-center max-lg:flex-col max-lg:gap-1  py-5 font-mulish bg-[#FFFEF2] h-auto">
          <div className=" w-[35%] max-lg:w-full max-lg:mb-5">
            <h1 className="font-[400]">The Athenaeum</h1>
            <h1 className="mt-5 text-[30px] max-sm:text-[25px] font-lato font-[400]">
              Decoding fragrance
            </h1>
            <p className="flex gap-1 py-5 ">
              The language of notes, sillage and aromatic profiles allows us to
              describe perfume. Discover our guide to selecting a signature
              fragrance.
            </p>
            <button className="border max-lg:mb-10 border-slate-400 mt-2 hover:text-white hover:bg-[#333333] px-6 flex  gap-10 py-5">
              Read More
              <BsArrowRight className="text-center mt-[4px]" />{" "}
            </button>
          </div>
          <div className="w-[70%] max-sm:w-full max-sm:px-4 max-sm:mr-0 mr-10">
            <video class="" autoPlay loop>
              <source
                src="https://videos.ctfassets.net/u1nb1km7t5q7/1fy7IJOkhkLfiBJNrqqZlL/55ce2547d65d261beb120b441a0ed0df/Aesop_A_Guide_to_Fragrance_Web_Secondary_Mid_01_Rose_Desktop_1920x1080px.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className=" h-36 max-sm:h-4  bg-[#FFFEF2]"></div>
        <div className=" flex   mx-8 max-sm:mx-4   max-lg:flex-col mb-10 max-lg:gap-1 py-5 font-mulish bg-[#FFFEF2]  h-auto">
          <div className=" w-[397px]  max-lg:w-full ">
            <h1 className="font-[400]">For warm climates</h1>
            <h1 className="mt-1 text-[30px] font-lato font-[400]">
              Adjusting to seasonal change
            </h1>
            <p className="py-4">
              In the warmer months, high temperatures and humidity can lead to
              increased sebum production for normal, combination, and oily
              skins. Accordingly, the use of slightly lighter formulations is
              recommended.
            </p>
          </div>
          <div className="w-[397px] h-[462px]">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/4MDDVixhlDFtOpXTyqjdcG/ead865d7568cefb70d74a989715c380b/Aesop-Skin-Immediate-Moisture-Facial-Hydrosol-50mL-Large-782x796px.png"
              alt=""
            />
            <h1 className="text-center hover:underline cursor-pointer">
              Immediate moisture Facial Hydrosol
            </h1>
            <h1 className="text-center   cursor-pointer mt-2">
              A refreshing mist hydrator
            </h1>
          </div>
          <div className="w-[400px] max-lg:hidden  ">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/4Okm4NhHan5ptJ1yApzHUn/04e93e8181d2dff9ff94b3534fc06cc0/Aesop-Skin-Purifying-Facial-Exfoliant-Paste-75mL-large.png"
              alt=""
              className="h-[400px]"
            />
            <h1 className="text-center hover:underline cursor-pointer">
              Purifying Facial Exfoliant Paste
            </h1>
            <h1 className="text-center   cursor-pointer mt-2">
              A deep cleaning exfoliant cream
            </h1>
          </div>
        </div>
        <div className="border-y mx-24 max-sm:hidden border-red-500 "></div>
        <div className=" h-32 max-lg:h-2 bg-[#FFFEF2]"></div>
        <div className=" flex items-end max-lg:flex-col max-lg:items-center max-lg:gap-1 gap-8  font-mulish bg-[#FFFEF2]  h-auto">
          <div className="w-[42rem] max-lg:w-[80%]  max-sm:w-full pl-20  max-lg:pl-0 max-md:px-4 max-lg:h-[400px] h-[500px]">
            <h1 className="font-[400]">Parsley Seed Skin Care</h1>
            <h1 className="mt-5 text-[30px] max-sm:text-[25px] font-lato font-[400]">
              In warm or humid urban settings, skin is vulnerable to a range of
              environmental factors.
            </h1>
            <p className="flex gap-1 py-5 ">
              Pollution, air-conditioning and the stresses of city life can
              heighten skin’s susceptibility to free radical damage and
              dehydration. Anti-oxidant rich Parsley Seed formulations help to
              support skin against these effects.
            </p>
            <button className="border border-slate-400  hover:text-white hover:bg-[#333333] px-3 flex  gap-2  py-5">
              Regimens for warm climates{" "}
              <BsArrowRight className="text-center mt-[4px]" />{" "}
            </button>
          </div>
          <div className=" h-36 max-lg:h-0 bg-[#FFFEF2]"></div>
          <div className="w-full  max-sm:px-4  bg-[#FFFEF2] pl-20  ">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" h-32 max-lg:h-4 bg-[#FFFEF2]"></div>
        <div className=" flex  items-end max-lg:flex-col max-lg:items-center max-lg:gap-1 gap-8  font-mulish bg-[#FFFEF2]  h-auto">
          <div className="w-[42rem] max-lg:w-[80%]  max-sm:w-full pl-20  max-lg:pl-0 max-md:px-4 max-lg:h-[400px] max-sm:h-auto h-[500px]">
            <h1 className="font-[400]">Facial Appointments</h1>
            <h1 className="mt-5 text-[30px] max-sm:text-[25px] font-lato font-[400]">
              Composure for the skin and senses
            </h1>
            <p className="flex gap-1 py-5 ">
              For a well-rounded skin care regimen, Aesop Facial Appointments
              offer a series of treatments tailored to balance, stimulate and
              intensely nourish the skin.
            </p>
            <button className="border border-slate-400 mt-2 hover:text-white hover:bg-[#333333] px-3 flex  gap-2 py-5">
              Regimens for warm climates{" "}
              <BsArrowRight className="text-center mt-[4px]" />{" "}
            </button>
          </div>
          <div className=" h-36 max-lg:h-4 bg-[#FFFEF2]"></div>
          <div className="w-full  max-sm:px-4  bg-[#FFFEF2] pl-20  ">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" h-32 max-lg:h-4 bg-[#FFFEF2]"></div>
      </div>
      <div className="my-6">
        <h1 className="text-center font-[900] text-[30px]">
          ‘Nothing is ever ended, everything only begun.’
        </h1>
        <p className="text-center font-[200] mt-3 text-[15px] ">
          Sara Teasdale
        </p>
      </div>
      <div className=" h-32 max-lg:h-4 bg-[#FFFEF2]"></div>
    </>
  );
}

export default Block2;
