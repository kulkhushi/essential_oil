import Link from "next/link";
import React from "react";

type BreadcrumbsPropsTypes= {
  imgSrc?:string;
  pageTitle?:string;
  BreadcrumbsPage?: { label: string; url?: string; }[]
}
//text-zinc-950

const Breadcum = ({imgSrc, BreadcrumbsPage,pageTitle}:BreadcrumbsPropsTypes) => {
  return (
    <div className="bg-gray-7">
      <div className="breadcrumbs-custom box-transform-wrap context-dark">
        <div className="container">
          <h3 className="breadcrumbs-custom-title">{pageTitle}</h3>
          <div className="breadcrumbs-custom-decor"></div>
        </div>
        <div
          className="box-transform"
          style={{ backgroundImage: `url(${imgSrc})` }}
        ></div>
      </div>
      <div className="container">
          <ul className="breadcrumbs-custom-path text-center text-zinc-950">
            {
              BreadcrumbsPage?.map((page,index)=>{
                return  <li key={index} className={page?.url ? '':'!text-zinc-950 !font-bold active'}><Link className={page?.url ? '':'!text-zinc-950 !font-bold'} href={page?.url as string}>{page.label}</Link></li>
              })
            }
          </ul>

        </div>
    </div>
  );
};

export default Breadcum;
