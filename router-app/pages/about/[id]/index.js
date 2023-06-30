import { useRouter } from "next/router";
import React from "react";

const AboutWithId = () => {
  const router = useRouter();
  console.log(router.query);

  const handleNavigateA = () => {
    // router.push("/about/max/detailA")
    // router.push("detailA")
    router.push({
      pathname: "/about/[id]/[detailId]",
      query: { id: "max", detailId: "detailA" },
    });
  };
  return (
    <div>
      AboutWithId
      <div>
        <button onClick={handleNavigateA} className="p-4 bg-red-400">
          Click and go A detail
        </button>
      </div>
    </div>
  );
};

export default AboutWithId;
