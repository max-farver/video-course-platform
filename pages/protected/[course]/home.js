import { useRouter } from "next/router"

const CoursePage = () => {
  const router = useRouter()
  const { course } = router.query

  return (
    <div>
      <h1>Course Name</h1>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a
        dolores illum labore velit ex?
      </h3>
    </div>
  )
}
