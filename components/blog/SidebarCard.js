const SidebarCard = ({ isLast }) => {
  return (
    <div className={`${!isLast && "border-b"} py-4`}>
      <div>
        <p className="text-sm leading-1 text-gray-500">
          <time dateTime="2020-03-16">Mar 16, 2020</time>
        </p>
        <a href="#" className="block">
          <h3 className="mt-2 text leading-6 font-semibold text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </a>
        <div className="mt-3">
          <a
            href="#"
            className="text-base leading-1 font-semibold text-primary-700 hover:text-primary-600 transition ease-in-out duration-150"
          >
            Read full story
          </a>
        </div>
      </div>
    </div>
  )
}

export default SidebarCard
