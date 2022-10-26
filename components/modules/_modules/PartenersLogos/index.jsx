import React from "react";
import LogoIpsumIcon1 from "../../vectors/LogoIpsumIcon1";
import LogoIpsumIcon2 from "../../vectors/LogoIpsumIcon2";
import MultiLineIcon from "../../vectors/MultiLineIcon";
import NIcon from "../../vectors/NIcon";
import RoundedChainIcon from "../../vectors/RoundedChainIcon";

const PartenersLogos = () => {
  return (
    <div className="border-t border-b border-content-green-secondary">
      <div className="flex justify-between py-10 max-w-screen-md mx-auto">
        <NIcon />
        <MultiLineIcon />
        <LogoIpsumIcon1 />
        <RoundedChainIcon />
        <LogoIpsumIcon2 />
      </div>
    </div>
  );
};

export default PartenersLogos;
