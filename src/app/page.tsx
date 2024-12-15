import Image from "next/image";

export default function Home() {
  return (
    <main className="max-h-screen overflow-hidden h-screen w-full flex items-center justify-center p-4 relative bg-primary-darkCyan">
      <section className="absolute -right-32 bottom-0 transform  w-1/2 bg-pattern-top h-1/2"></section>
      <section className="absolute -left-0 -top-48 transform rotate-90  w-1/2 bg-pattern-bottom h-1/2 bg-cover bg-no-repeat"></section>
      <section className="w-96 flex flex-col ">
        <div>
          <Image
            src={"/images/bg-pattern-card.svg"}
            alt="background pattern"
            width={384}
            height={384}
            className="rounded-t-2xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-b-2xl p-6">
          <div>
            <Image
              src={"/images/image-victor.jpg"}
              alt="Victor Crest"
              width={96}
              height={96}
              className="rounded-full border-4 border-white -mt-16"
            />
          </div>

          <div className="flex flex-col items-center gap-1">
            <h1 className="font-bold text-primary-veryDarkDesaturatedBlue">
              Victor Crest <span className="text-second-darkGray">26</span>
            </h1>
            <h1 className="text-sm text-second-darkGray">London</h1>
          </div>
          <hr className="w-full border-gray-200 border-1 my-3" />
          <div className="flex items-center justify-between w-3/4 mx-auto">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-primary-veryDarkDesaturatedBlue">
                80K
              </h1>
              <h1 className="text-xs text-second-darkGray ">Followers</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-primary-veryDarkDesaturatedBlue">
                803K
              </h1>
              <h1 className="text-xs text-second-darkGray ">Likes</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-primary-veryDarkDesaturatedBlue">
                1.4K
              </h1>
              <h1 className="text-xs text-second-darkGray ">Photos</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
