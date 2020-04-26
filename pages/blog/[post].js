import Layout from "../../components/layout/Layout"
import SidebarCard from "../../components/blog/SidebarCard"

const Post = () => {
  return (
    <Layout>
      <div className="section md:flex flex-row mt-10">
        <article className="flex-1">
          <h1 className="text-4xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Awesome Cool Article
          </h1>
          <div className="flex mb-8 items-center">
            <div className="h-6 w-6 rounded-full border-primary-600 border-solid border-2 mr-2"></div>
            <p className="text-gray-400">
              Author McNamey
              <span className="ml-6 text-xs text-gray-500 font-bold tracking-wide">
                Feb 24, 2020
              </span>
            </p>
          </div>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            scelerisque lacus nunc, ut iaculis augue bibendum at. In mollis eros
            a nibh efficitur, eu iaculis leo placerat. Sed maximus leo orci, vel
            convallis eros efficitur sit amet. Fusce ut dolor iaculis, convallis
            erat ut, placerat leo. Aliquam erat volutpat. Nam libero nisi,
            dictum feugiat magna tincidunt, vehicula volutpat velit. Sed quis
            auctor lorem. Praesent sed malesuada est. Morbi id enim pretium,
            sagittis ante et, ultricies dolor. Fusce hendrerit, metus ac
            ultricies consectetur, enim lorem commodo neque, sollicitudin rutrum
            velit est sit amet metus. Praesent sed libero auctor, eleifend dui
            ut, porttitor leo. Duis sodales tempor risus gravida sollicitudin.
            Mauris ut aliquet ligula.
          </p>
          <p className="mb-4">
            Vivamus a scelerisque velit. Suspendisse potenti. Nulla orci justo,
            pharetra eget blandit ut, consectetur in justo. Nam et commodo enim.
            Etiam id mattis ligula. Ut sed nisi blandit, finibus purus volutpat,
            consequat dui. Praesent elit dui, tincidunt ut ornare in,
            pellentesque at nisl. Fusce ut pretium purus. Phasellus finibus
            massa id velit tristique, nec fermentum orci tincidunt. Cras varius
            hendrerit neque ac accumsan. Praesent auctor turpis hendrerit nibh
            vestibulum, in egestas purus lobortis.
          </p>
          <p className="mb-4">
            Fusce venenatis arcu quis risus euismod maximus. Phasellus aliquet
            non eros at sagittis. Ut malesuada neque vitae urna lobortis
            egestas. Pellentesque sollicitudin neque in enim venenatis pretium.
            Curabitur varius consequat lorem eget dictum. Pellentesque magna
            sapien, laoreet ac consequat sed, porta et ipsum. Integer eu
            sagittis ex. Aenean euismod iaculis purus ac porttitor. Donec nec
            rutrum est, tempor malesuada est. Aliquam tincidunt velit mi, quis
            egestas ipsum vulputate et. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Donec mattis
            tincidunt ipsum, ut luctus augue feugiat nec. Sed malesuada lacus
            ligula, in dictum magna ultrices non.
          </p>
          <p className="mb-4">
            Cras vestibulum vehicula luctus. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Morbi elit sem, eleifend at dui euismod,
            semper congue lorem. Aliquam augue justo, euismod vitae tristique
            vitae, malesuada ut massa. Phasellus in neque sit amet lorem feugiat
            porta viverra in dolor. Donec ornare tortor eget porta scelerisque.
            Aliquam quis urna ac tellus accumsan porttitor. Duis id dolor vel
            elit porta dapibus a eget lectus. Nullam pellentesque nisi quis
            fermentum posuere. Duis eu magna faucibus diam dignissim dignissim.
            Aliquam erat volutpat. Pellentesque sed eros consequat, malesuada
            elit gravida, hendrerit risus. Fusce quam felis, ultrices pretium
            gravida vitae, euismod ac velit.
          </p>
          <p className="mb-4">
            Maecenas ex nibh, fermentum eu accumsan et, interdum id nisl.
            Praesent a velit eros. Curabitur volutpat eleifend sapien ut
            dapibus. Phasellus efficitur ligula hendrerit faucibus mattis. In
            sagittis finibus nulla varius vehicula. Aliquam eget enim lacinia
            magna tempus imperdiet. Donec at bibendum lectus. Morbi non lacinia
            mauris, eu cursus justo.{" "}
          </p>
        </article>
        <aside className="md:w-64 lg:w-72 md:border-l border-gray-100 py-4 md:p-4 md:ml-12 last:border-b-0">
          <h3 className="text-xl font-bold">Related Posts</h3>
          <SidebarCard />
          <SidebarCard />
          <SidebarCard />
          <SidebarCard />
          <SidebarCard isLast={true} />
        </aside>
      </div>
    </Layout>
  )
}

export default Post
