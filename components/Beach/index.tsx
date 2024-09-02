import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Beach = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
      <div className="w-full">
  <div className="relative right-0">
  <SectionTitle
          title="Berbagai Pesona Alami"
          paragraph="Setiap sudut Pulau Breueh adalah keajaiban alam yang menunggu untuk dijelajahi."
          center
          mb="80px"
        />

    {/* start gallery */}
    <div data-tab-content="" className="py-5 pb-5">
      <div className="block opacity-100" id="app" role="tabpanel">
        <div role="tabpanel"
          className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
          data-value="html">
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="/images/touristm/a.jpg"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="/images/touristm/b.jpg"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="/images/touristm/c.jpg"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="/images/touristm/d.jpg"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="/images/touristm/e.jpg"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="/images/touristm/f.jpg"
              alt="image-photo" />
          </div>
        </div>
      </div>
      <div className="hidden opacity-0" id="message" role="tabpanel">
        <div role="tabpanel"
          className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
          data-value="html">
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg" alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg" alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
              alt="image-photo" />
          </div>
        </div>
      </div>
      <div className="hidden opacity-0" id="settings" role="tabpanel">
        <div role="tabpanel"
          className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
          data-value="html">
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg" alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg" alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80"
              alt="image-photo" />
          </div>
 
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
              alt="image-photo" />
          </div>
        </div>
      </div>
    </div>
    {/* end gallery */}
  </div>
</div>
      </div>
    </section>
  );
};

export default Beach;
