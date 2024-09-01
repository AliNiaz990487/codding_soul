import { FaArrowUp } from "react-icons/fa6";


const ScrollToTop = () => {
  return (
    <div className="z-50 fixed bottom-10 right-5 px-4 p-2 bg-primary text-white rounded-bl-xl cursor-pointer transition-colors hover:bg-secondary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <FaArrowUp />
    </div>
  )
}

export default ScrollToTop