import { Link } from "react-router-dom"

const PrimaryButton = ({link, className, children}) => {
  return (
    <Link className={`quote-btn hover:bg-white hover:!text-primary ${className}`} to={link}>{children}</Link>
  )
}

export default PrimaryButton
