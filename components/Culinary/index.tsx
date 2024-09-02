import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Culinary = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">

      <SectionTitle
          title="Rasa Autentik dari Breueh"
          paragraph="Sajian kuliner yang menggugah selera dari ikan segar yang diambil langsung dari laut, hingga hidangan khas yang kaya akan rempah."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">

          {/* start gallery */}
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <div className="grid grid-cols-2 gap-2">
                <div>
                <img className="object-cover object-center h-40 max-w-full rounded-lg md:h-60"
                    src="/images/culinary/a.jpg"
                    alt="" />
                </div>
                <div>
                <img className="object-cover object-center h-40 max-w-full rounded-lg md:h-60"
                    src="/images/culinary/b.jpg"
                    alt="" />
                </div>
                <div>
                <img className="object-cover object-center h-40 max-w-full rounded-lg md:h-60"
                    src="/images/culinary/c.jpg"
                    alt="" />
                </div>
                <div>
                <img className="object-cover object-center h-40 max-w-full rounded-lg md:h-60"
                    src="/images/culinary/d.jpg"
                    alt="" />
                </div>
            </div>
          </div>
          {/* end gallery */}

          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Timphan
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Kue tradisional Aceh kenyal dengan isian serikaya atau kelapa parut.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Kuah Pliek U
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Hidangan Aceh kaya rempah dengan santan, sayuran, dan pliek u (ampas kelapa fermentasi).
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Kuah Beulangong
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Gulai Aceh gurih dengan daging dan bumbu kelapa parut sangrai.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Bubur Asyura
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Bubur manis Pulau Breueh dengan beras, kacang-kacangan, dan santan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culinary;
