const FSImage = ({ src, fillHeight }) => {
  return (
    <picture>
      <source
        className={`absolute ${fillHeight ? "h-full" : "w-full"} top-0 left-0`}
        srcset={require(`../../media/images/${src}?lqip`)}
      />
      <source
        className={`absolute ${fillHeight ? "h-full" : "w-full"} top-0 left-0`}
        srcset={require(`../../media/images/${src}?webp`)}
        type="image/webp"
      />
      <source
        className={`absolute ${fillHeight ? "h-full" : "w-full"} top-0 left-0`}
        srcset={require(`../../media/images/${src}`)}
        type="image/jpeg"
      />
      <img
        className={`absolute ${fillHeight ? "h-full" : "w-full"} top-0 left-0`}
        src={require(`../../media/images/${src}`)}
      />
    </picture>
  )
}

export default FSImage
