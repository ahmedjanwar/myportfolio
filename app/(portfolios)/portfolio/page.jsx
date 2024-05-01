import Header from "@/components/homes/headers/Header";
import MenuTwo from "@/components/homes/menus/MenuTwo";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";

import Portfolio from "@/components/homes/portfolio/Portfolio";

import React from "react";
export const metadata = {
  title: "Portfolio",
  description:
    "Portfolio",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper home" id={"portfolio"}>
        <Header />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />
            <Portfolio />
            <MenuTwo />
          </div>
        </div>
      </div>
    </>
  );
}
