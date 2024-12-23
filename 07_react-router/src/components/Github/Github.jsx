import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/rushikesh5035")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github Folloers: {data.followers}
      <img src={data.avatar_url} alt="Git Pic" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/rushikesh5035");
  return res.json();
};
