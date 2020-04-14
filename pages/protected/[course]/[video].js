import { useRouter } from "next/router"

const VideoPage = () => {
  const router = useRouter()
  const { video } = router.query

  return (
    <div>
      <h1>{video}</h1>
    </div>
  )
}

export default VideoPage
