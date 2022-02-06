import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "./style.scss";
export function SkeletonItem(props) {
  return (
    <div>
      <Skeleton variant="rectangular" width={`${100}%`} height={200} />
      <Skeleton variant="text" height={30} />
      <Skeleton variant="text" height={30} />
      <div className="price">
        <Skeleton variant="text" width={`${40}%`} height={50} />
        <Skeleton variant="text" width={`${40}%`} height={50} />
      </div>
    </div>
  );
}

export function SkeletonList({ length = 15 }) {
  const data = [...Array(length).keys()];
  return (
    <>
      {data?.map((item) => {
        return <SkeletonItem />;
      })}
    </>
  );
}
