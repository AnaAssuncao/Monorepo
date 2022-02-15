import React from "react";
import { gql, useQuery } from "@apollo/client";
// import { Routes, Route } from "react-router-dom";
// import { ChallengesProvider } from "context/ChallengesContext";
// import { CountdownProvider } from "context/CountdownContext";

// import RoutesApp from "./Routes";
// /** componenets */
// import NavBar from "components/NavBar/NavBar";
// import Footer from "components/Footer/Footer";
/** style */
// import * as El from "./Layout.style";

// import Home from "pages/Home/Home";
// import Activities from "pages/Activities/Activities";
// import List from "pages/List/List";

// # query Query {
//   #   challenges{
//   #     type
//   #     description
//   #     amount
//   #   }
//   # }

const CHALLENGES = gql`
  query getJobs {
	jobs {
		title
    slug
    applyUrl
    isPublished
    company {
			name
      id
      slug
    }
  }
}
`;

const Layout = () => {
  const { loading, error, data } = useQuery(CHALLENGES, {
    variables: '',
    fetchPolicy: 'cache-and-network'
  });

  console.log('< LAYOUT FETCH > ', loading, error, data)

  if (loading) return null

  return (
    <div>
    LAYOUT
    <>
    {data.jobs && data.jobs.map(item => (
      <p>{item?.title}</p>
    ))}  
    </>
    </div>
  )
  // return (
  //   <El.Container>
  //   {/* <ChallengesProvider> */}
  //   {/* <CountdownProvider> */}
  //   {/* <NavBar /> */}

  //   LAYOUT

  //   {/* <Routes>
  //     <Route path={"/"} element={<Home />} />
  //     <Route path={"/desafios"} element={<Activities />} />
  //     <Route path={"/beneficios"} element={<List />} />
  //   </Routes> */}

  //   {/* <Routes>{buildRoutes()}</Routes> */}
  //   {/* <Routes>
  //         {arrRoutes.map((route) => {
  //           const { component: Component, path, name } = route;
  //           return <Route path={path} key={name} element={Component} />;
  //         })}
  //       </Routes> */}

  //   {/* <Footer /> */}
  //   {/* </CountdownProvider> */}
  //   {/* </ChallengesProvider> */}
  // </El.Container>
  // )
}

export default Layout