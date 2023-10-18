import "./ProductRevew.css";
function ProductRevew() {
  return (
    <div className="counters-1">
      <div className="container">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 lg:w-1/4 px-2">
            <div className="counter-box-1">
              <div className="text-primary text-5xl w-16 h-16">
                <img src="Car-01-56.png" alt="" />
              </div>
              <h1 className="counter text-5xl">967</h1>
              <h5 className="text-xl">
                Total <span>Cars</span>
              </h5>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2">
            <div className="counter-box-1">
              <div className="text-primary text-5xl w-16 h-16">
                <img src="Blog-WF-56.png" alt="" />
              </div>
              <h1 className="counter text-5xl">1276</h1>
              <h5 className="text-xl">
                Dealer <span>Reviews</span>
              </h5>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2">
            <div className="counter-box-1">
              <div className="text-primary text-5xl w-16 h-16">
                <img src="User-Profile-1-WF-56.png" alt="" />
              </div>
              <h1 className="counter text-5xl">396</h1>
              <h5 className="text-xl">
                Happy <span>Clients</span>
              </h5>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2">
            <div className="counter-box-1">
              <div className="text-primary text-5xl w-16 h-16">
                <img src="Medal-02-56.png" alt="" />
              </div>
              <h1 className="counter text-5xl">177</h1>
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
