import image from "../assets/images/our_work_img-1.png";
import workIcon1 from "../assets/images/our_work_counter_bulb.png";
import workIcon2 from "../assets/images/our_work_counter_phone.png";
import workIcon3 from "../assets/images/our_work_counter_thumb.png";
import workIcon4 from "../assets/images/our_work_counter_gear.png";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const data = [
  {
    image: workIcon1,
    title: 12000,
    description: "Satisfied Clients",
  },
  {
    image: workIcon2,
    title: 96000,
    description: "Packages Delivered",
  },
  {
    image: workIcon3,
    title: 1500,
    description: "Experienced Team",
  },
  {
    image: workIcon4,
    title: 60,
    description: "Branches",
  },
];

const Counter = ({ upperLimit, duration, delay }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null); // Use useRef instead of direct ref usage
  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, upperLimit, { duration: duration, delay: delay });

      return () => controls.stop();
    }
  }, [inView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const WorkCard = (props) => (
  <div data-aos="zoom-in" className="bg-white text-center flex flex-col items-center border border-primary rounded-bl-3xl p-4">
    <img src={props.image} className="" alt="" />
    <div className="text-xl font-bold py-3"><Counter upperLimit={props.title} duration={3} delay={0} />{props.title === 60 && "+"}</div>
    <p>{props.description}</p>
  </div>
);

const OurWork = () => {
  return (
    <div className="bg-gray-100 mt-20 py-8">
      <div className="small-container text-center">
        <p className="uppercase text-secondary text-xl">our work</p>
        <p className="capitalize py-6 pb-12 text-3xl font-bold">we create an honest, hassle-free, and quality moving experience</p>
      </div>

      <div className="relative side-aligned-container px-1 md:px-0 mx-auto md:mx-0">
        <div className="row md:absolute top-2/4 md:-translate-y-2/4 left-0">
          <div className="col-12 md:col-7">
            <img data-aos="fade-right" src={image} className="w-full" alt="Our Work" />
          </div>
          <div className="md:col-4"></div>
        </div>

        <div className="row justify-end">
          <div className="col-12 md:col-7 lg:col-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.map((item, index) => (
                <WorkCard {...item} key={index} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurWork;
