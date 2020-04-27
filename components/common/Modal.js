import { useEffect, useRef } from "react"

const Modal = ({ isShowing, toggle, children }) => {
  const menuRef = useRef()

  useEffect(() => {
    if (isShowing) document.body.style.overflow = "hidden"
    if (!isShowing) document.body.style.overflow = ""
  }, [isShowing])

  return (
    <div
      onClick={toggle}
      className={`${
        isShowing ? "" : "hidden"
      } fixed top-0 left-0 h-screen w-screen flex flex-col justify-center items-center bg-primary-hero`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
          console.log(e)
        }}
        className="rounded-lg p-4 bg-gray-100 overflow-hidden"
      >
        <div className=" flex justify-end">
          <div onClick={toggle} className="w-4 h-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
