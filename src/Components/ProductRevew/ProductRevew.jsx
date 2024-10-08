import "./ProductRevew.css";
function ProductRevew() {
  return (
    <div className="counters-1">
      <div className="container">
        <div className="flex flex-wrap mx-2">
          <div
            data-aos="fade-up-right"
            className="w-full px-2 md:w-1/2 lg:w-1/4"
          >
            <div className="counter-box-1">
              <div className="text-5xl text-primary ">
                <i>
                  <img src="https://i.ibb.co/Wyk0LDG/Car-01-56.png" alt="" />
                </i>
              </div>
              <h1 className="text-5xl counter">967</h1>
              <h5 className="text-xl">
                Total <span>Cars</span>
              </h5>
            </div>
          </div>
          <div
            data-aos="fade-up-right"
            className="w-full px-2 md:w-1/2 lg:w-1/4"
          >
            <div className="counter-box-1">
              <div className="text-5xl text-primary ">
                <i>
                  <img src="https://i.ibb.co/thxTK5w/Blog-WF-56.png" alt="" />
                </i>
              </div>
              <h1 className="text-5xl counter">1276</h1>
              <h5 className="text-xl">
                Dealer <span>Reviews</span>
              </h5>
            </div>
          </div>
          <div
            data-aos="fade-up-left"
            className="w-full px-2 md:w-1/2 lg:w-1/4"
          >
            <div className="counter-box-1">
              <div className="text-5xl text-primary">
                <i>
                  <img
                    src="https://i.ibb.co/kXSF5WN/User-Profile-1-WF-56.png"
                    alt=""
                  />
                </i>
              </div>
              <h1 className="text-5xl counter">396</h1>
              <h5 className="text-xl">
                Happy <span>Clients</span>
              </h5>
            </div>
          </div>
          <div
            data-aos="fade-up-left"
            className="w-full px-2 md:w-1/2 lg:w-1/4"
          >
            <div className="counter-box-1">
              <div className="text-5xl text-primary">
                <i>
                  <img src="https://i.ibb.co/Wvj5vMw/Medal-02-56.png" alt="" />
                </i>
              </div>
              <h1 className="text-5xl counter">177</h1>
              <h5 className="text-xl">
                award <span>winning</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRevew;
