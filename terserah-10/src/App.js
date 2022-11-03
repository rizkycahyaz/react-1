import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="Parentbox">
        <div className="Foto">
          <img src="sepatu nike.jpg" />
        </div>
        <div className="Deskripsi">
          <h1 className="Title">Nike Phantom GT Elite DF 3D</h1>
          <p className="Price">IDR 600.000</p>
          <p className="Spesifikasi">
            Spesifikasi Building off the Phantom GT, the Nike Phantom GT2 Elite FG features an updated design 
            and raised patterning to help create optimal spin to control the flight of the ball. 
            Off-centre lacing provides a clean strike zone for skilful dribbling
            , passing and shooting.
          </p>
          <h3 className="Type">size</h3>
          <button class="button1">39</button>
          <button class="button2">40</button>
          <button class="button3">41</button>
          <br></br>
          <button class="button">Buy Now</button>
          <button class="tombol">Add To Wishlist!</button>
        </div>
      </div>

<div className="Parentbox">
<div className="Foto">
  <img src="sepatu adidas.jpg" />
</div>
<div className="Deskripsi">
  <h1 className="Title">adidas x speedflow.1</h1>
  <p className="Price">IDR 2.100.000</p>
  <p className="Spesifikasi">
    Spesifikasi When razor-sharp instincts flow into lightning pace, the pitch becomes your playground. Find your football groove in adidas X. 
    These boots support speed of thought and rapid feet. The Carbitex carbon-fibre insert and raised forefoot help spark explosive acceleration,
     and an Agilitycage straps you in for jinks and turns. The adidas PRIMEKNIT skin adds comfort and confidence.
  </p>
  <p className="Type">Color</p>
  <button class="button4"></button>
  <button class="button5"></button>
  <button class="button6"></button>
  <br></br>
  <h3 className="Type">size</h3>
  <button class="button7">39</button>
  <button class="button8">40</button>
  <button class="button9">41</button>
  <br></br>
  <br></br>
  <font color="blue">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-1 h-1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
      />
    </svg>
    How to configure to sepatu
  </font>
  <br></br>
  <hr align="center"></hr>
  <button class="tombol">$33.0000</button>
  <button class="button">Buy Now</button>
</div>
</div>
</div>
  );
}

export default App;
