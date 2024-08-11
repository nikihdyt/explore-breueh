import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Culture = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Budaya"
                paragraph="Budaya yang kaya dan beragam, dari tarian tradisional hingga festival yang meriah."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
            {/* start gallery */}
            <div className="grid gap-4">
            <div>
                <img className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                alt="" />
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div>
                <img
                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
                </div>
                <div>
                <img
                    src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
                </div>
                <div>
                <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
                </div>
                <div>
                <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
                </div>
                <div>
                <img
                    src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
                </div>
            </div>
            </div>
            {/* end gallery */}


              {/* <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;