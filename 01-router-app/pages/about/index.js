import Link from "next/link";
import React from "react";

const AboutPage = () => {
  const abouts = [
    {
      id: "qwe",
      name: "qwePage",
    },
    {
      id: "max",
      name: "maxiPage",
    },
    {
      id: "min",
      name: "minPage",
    },
  ];
  return (
    <div>
      <ul>
        {abouts.map((about) => {
          return (
            <li key={about.id}>
              {/* <Link href={"about/" + about.id}>{about.name}</Link> */}
              <Link
                href={{
                  pathname: "/about/[id]",
                  query: { id: about.id },
                }}
              >
                {about.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AboutPage;
