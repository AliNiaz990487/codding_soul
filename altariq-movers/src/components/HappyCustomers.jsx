import image from "../assets/images/testimonial_exp_img-1.jpg"
import sliderImage1 from "../assets/images/testimonial_client_02.png"
import sliderImage2 from "../assets/images/testimonial_client_img.jpg"
import sliderImage3 from "../assets/images/about_video_img.jpg"
import Slider from 'react-slick'
import { FaQuoteLeft } from 'react-icons/fa'

const data = [
  {
    image: sliderImage1,
    name: "Bengal Fikka",
    location: "Sharjah",
    review: "Altariq Movers exceeded ​my expectations! ​Professional, efficient, and ​careful with ​our belongings. Highly recommend!"
  },
  {
    image: sliderImage2,
    name: "richard alizabeth",
    location: "UK Residence",
    review: "Reliable and stress-free ​moving experience ​with Altariq Movers. ​Courteous team, ​timely service, and ​top-notch packing ​skills."
  },
  {
    image: sliderImage3,
    name: "Micek Kolii",
    location: "Abu Dhabi",
    review: "Choosing Altariq Movers ​was a ​game-changer. Friendly staff, ​fair pricing, ​and they made ​our move ​a breeze. A+ service!"
  },
]

const CustomerSlide = (props) => (
  <div>
    <span className="text-6xl"><FaQuoteLeft /></span>
    <p className="py-4">{props.review}</p>
    <div className="flex items-center gap-4 flex-wrap">
      <img className="rounded-full w-24 border-2 p-1 border-primary aspect-square" src={props.image} alt="" />
      <div>
        <p className="uppercase text-xl">{props.name}</p>
        <p className="capitalize text-gray-300">{props.location}</p>
      </div>
    </div>
  </div>
)

const CustomerSlider = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div className="custom-dot w-5 h-1 bg-white"></div>
    ),
    appendDots: dots => (
      <div style={{ padding: "10px" }}>
        <ul className="custom-dots"> {dots} </ul>
      </div>
    )
  };
  return (
    <Slider {...settings}>
      {data.map((item, i) => (
        <CustomerSlide key={i} {...item} />
      ))}
    </Slider>
  )
}

const HappyCustomers = () => {
  return (
    <div className="container pt-20">
      <div className="md:relative">
        {/* Testimonial Section */}
        <div className="row justify-end">
          <div data-aos="fade-up" className="col-12 md:col-8 md:ps-40 p-8 sm:p-12 bg-secondary text-white rounded-bl-4xl">
            <h4 className="uppercase text-primary text-xl">testimonial</h4>
            <p className="font-bold text-5xl py-5">Our Happy Customer</p>
            <CustomerSlider />
          </div>
        </div>

        {/* Image Section with Responsive Margins */}
        <div className="mt-60 md:mt-0 row md:absolute top-1/2 -translate-y-1/2 ms-0 lg:ms-10 xl:ms-32 2xl:ms-48">
          <div className="col-12 md:col-6 lg:col-8">
            <img data-aos="zoom-in" src={image} className="rounded-bl-4xl w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default HappyCustomers
