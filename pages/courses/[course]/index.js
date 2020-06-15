import { useQueryOnClient } from "../../../utils/hooks";
import { getSeries } from "../../../utils/datocms/api";
import { useState, useEffect } from "react";
import Link from "next/link";

import {
  checkUserCredentials,
  loginRedirect,
} from "../../../utils/auth/checkUserCredentials";
import Layout from "../../../components/layout/Layout";
import VideoList from "../../../components/video/VideoList";

const CoursePage = ({ course, isAuthorized }) => {
  // const data = useQueryOnClient(getSeries, { slug: course })
  if (!isAuthorized) {
    loginRedirect();
  }

  return (
    isAuthorized && (
      <Layout>
        <div className="section grid gap-8 md:grid-cols-2 md:mt-12">
          <div>
            <h1 className="text-4xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Course Name
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores fugit modi voluptate velit nesciunt eum saepe dolorum
              culpa dignissimos deleniti possimus consequatur molestiae sunt
              delectus, ullam esse facilis perspiciatis illo. Veniam, excepturi
              ex? Praesentium ratione incidunt fuga eaque sit possimus
              reiciendis! Itaque nam magnam ducimus odio, recusandae sapiente
              error cumque!
            </p>
            <Link href="/courses/asdf/adsfjjs">
              <a className="btn-primary mt-12 ">Next Video</a>
            </Link>
          </div>
          <VideoList />
        </div>
      </Layout>
    )
  );
};

export const getServerSideProps = async (ctx) => {
  const isAuthorized = await checkUserCredentials(ctx);
  return { props: { course: ctx.params.course, isAuthorized } };
};

export default CoursePage;
