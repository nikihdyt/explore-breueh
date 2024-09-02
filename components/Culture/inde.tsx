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
                title="Selami Tradisi dan Kearifan Lokal"
                paragraph="Setiap sudut pulau menyimpan cerita yang sarat akan nilai-nilai budaya dan kearifan lokal"
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
                    src="/images/culture/a.jpg"
                    alt="" />
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div>
                <img
                    src="/images/culture/b.jpg"
                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
                </div>
                <div>
                <img
                    src="/images/culture/c.jpg"
                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
                </div>
                <div>
                <img
                    src="/images/culture/d.jpg"
                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
                </div>
                <div>
                <img
                    src="/images/culture/e.jpg"
                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
                </div>
                <div>
                <img
                    src="/images/culture/f.jpg"
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