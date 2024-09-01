import image from "../assets/images/about_video_img.webp"
import { useState } from "react"
const accordionData = [
  {
    question: "How do I ​get a ​moving quote?",
    answer: "Simply fill out ​our online ​form, and we'll ​provide you ​with a detailed ​moving quote ​tailored to your needs."
  },
  {
    question: "Are packing services included?",
    answer: "Yes, Altariq Movers ​offers comprehensive ​packing services to ​ensure your ​belongings are securely ​packed and ​transported."
  },
  {
    question: " What areas do you serve?",
    answer: "We proudly serve ​[Your Service ​Areas]. Check our ​website or ​contact us for ​specific locations ​covered."
  },
  {
    question: "How can I ​track my ​shipment?",
    answer: "Altariq Movers provides ​real-time tracking ​to keep you ​informed about ​the status of ​your shipment. ​Use our tracking ​tool on ​our website."
  }
]



const AccordionItem = ({ question, answer, index, isOpen, toggleItem }) => {
  return (
    <div className={`collapse collapse-arrow border border-gray-700 rounded-none rounded-bl-3xl my-4 ${isOpen ? 'collapse-open' : 'collapse-close'}`}>
      <div className={`collapse-title text-xl font-medium cursor-pointer transition-colors ${isOpen ? "bg-primary text-white": ""}`} onClick={() => toggleItem(index)}>
        {question}
      </div>
      <div className="collapse-content">
        <p className="pt-4">{answer}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {accordionData.map((item, i) => (
        <AccordionItem
          question={item.question}
          answer={item.answer}
          index={i}
          isOpen={openIndex === i}
          toggleItem={toggleItem}
          key={i}
        />
      ))}
    </>
  );
};



const FAQ = () => {
  return (
    <div className="container bg-secondary relative h-[32rem] rounded-bl-4xl mt-56">
      <div className="row absolute bottom-0 w-full">
        <div className="col-12 md:col-6">
          <img data-aos="zoom-in" src={image} alt="" />
        </div>
      </div>

      <div className="block md:hidden h-[32rem]"></div>

      <div className="row justify-center md:justify-end md:absolute top-0 left-0 md:w-full">
        <div data-aos="fade-up" className="col-12 md:col-6">
          <h4 className="text-white text-4xl font-bold md:py-8 md:pt-12">Frequently Asked Questions</h4>
          <div className="bg-white px-4 py-6 shadow-md rounded-bl-4xl"><Accordion /></div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
