import { useRouter } from "next/router";

import {
  checkUserCredentials,
  loginRedirect,
} from "../../../utils/auth/checkUserCredentials";
import Layout from "../../../components/layout/Layout";
import VideoList from "../../../components/video/VideoList";

const VideoPage = ({ isAuthorized }) => {
  const router = useRouter();
  const { video } = router.query;

  if (!isAuthorized || isAuthorized == "undefined") {
    loginRedirect();
  }

  return (
    isAuthorized && (
      <Layout>
        <div className="section">
          <div className="bg-gray-300 h-108 mt-4 mb-4"></div>
          <h1 className="text-3xl font-bold ">Video Name</h1>
          <div className="grid gap-8 md:grid-cols-2 mb-8 md:mb-auto">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                dignissimos animi libero atque numquam laudantium, nihil minus
                qui temporibus amet aperiam molestias earum magni eveniet veniam
                laborum recusandae officia quibusdam. Dicta sunt libero odio
                minima ratione veritatis deleniti, vero molestias.
              </p>
            </div>
            <VideoList />
          </div>
        </div>
      </Layout>
    )
  );
};

export const getServerSideProps = async (ctx) => {
  const isAuthorized = await checkUserCredentials(ctx);
  return {
    props: {
      course: ctx.params.course,
      video: ctx.params.video,
      isAuthorized,
    },
  };
};

export default VideoPage;
