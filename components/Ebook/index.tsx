const Ebook = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">


        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">

          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <div className="grid grid-cols-2 gap-2">
              {/* <embed src="/images/ebook/ebook.pdf" width="500" height="375" 
                type="application/pdf"></embed> */}
                <p>Ups. Ebook belum tersedia.</p>
            </div>
          </div>

          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Ingin Tahu Lebih Banyak Tentang Pulau Breueh?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Unduh eBook gratis kami dan temukan semua keajaiban di Breueh.
                </p>
                <div className="mt-4 md:mt-8">
                  <a
                      // href="/images/ebook/ebook.pdf"
                      download="newfilename"
                      className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                      Unduh Sekarang
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Ebook;
