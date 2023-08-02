import "./about.css";



export default function Aboutus() {
  return (
    <div className="hv1">
      {/* <div className="aboutus">
        <Topbar />
      </div> */}
              <div className="write1"><center><h1>About Us</h1></center></div>

      <div className="up">
      <div className="pic">
        <img
          // src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg"
          src="https://wallpaperaccess.com/full/637967.jpg"
          alt=""
        />
      </div>
      </div>
   
        <div className="write2">
          <text>
          We,re a fully distributed team of 78 people living and working in 20 countries
          around the world. And we,re working to build the best products to help our
          customers build their brands and grow their businesses on social media.{"\n"}

          {"\n"}We,ve always aimed to do things a little differently at Buffer. Since the early
          days, we,ve had a focus on building one of the most unique and fulfilling
          workplaces by rethinking a lot of traditional practices.

          A commitment to supporting our team and our customers has helped Buffer
          grow from humble beginnings to now serving more than 140,000 users. Our
          passion for making meaningful connections flows through everything we do.
          
          We care about building a quality product, trusted relationships with our
          customers, and a sense of community that connects our customers and team with one another.
          </text>
        </div>
      </div>
          
  );
}