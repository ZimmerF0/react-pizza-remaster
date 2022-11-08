import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="121" r="120" />
    <rect x="0" y="261" rx="10" ry="10" width="280" height="15" />
    <rect x="0" y="298" rx="10" ry="10" width="280" height="90" />
    <rect x="0" y="415" rx="10" ry="10" width="90" height="27" />
    <rect x="130" y="404" rx="20" ry="20" width="150" height="45" />
  </ContentLoader>
);

export default Skeleton;
