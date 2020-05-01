const FSImage = ({ src, alt }) => {
  return (
    <picture>
      <img
        className={`absolute w-full top-0 left-0`}
        src={require(`../../media/images/${src}?lqip`)}
        alt={alt}
      />
      <source
        className={`absolute w-full top-0 left-0`}
        srcSet={require(`../../media/images/${src}?webp`)}
        type="image/webp"
        alt={alt}
      />
      <source
        className={`absolute w-full top-0 left-0`}
        srcSet={require(`../../media/images/${src}`)}
        type="image/jpeg"
        alt={alt}
      />
      <img
        className={`absolute w-full top-0 left-0`}
        src={require(`../../media/images/${src}`)}
        alt={alt}
      />
    </picture>
  )
}

export default FSImage
