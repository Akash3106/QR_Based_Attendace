import React from "react";
import { API } from "../backend";
import Base from "./Base";
export default function Home() {
  console.log("API is ", API);
  return (
    <div>
      <Base title="Home Page">
        <div
          itemscope
          itemtype="http://schema.org/Person"
          class="fiverr-seller-widget"
          style={{ display: "inline-block" }}
        >
          <a
            itemprop="url"
            href="https://www.fiverr.com/akash__4"
            rel="nofollow"
            target="_blank"
            style={{ display: "inline-block" }}
          >
            <div
              class="fiverr-seller-content"
              id="fiverr-seller-widget-content-9cfd41fe-47e5-4638-9a6a-a821984e6007"
              itemprop="contentURL"
              style={{ display: "none" }}
            ></div>
            <div id="fiverr-widget-seller-data" style={{ display: "none" }}>
              <div itemprop="name">akash__4</div>
              <div itemscope itemtype="http://schema.org/Organization">
                <span itemprop="name">Fiverr</span>
              </div>
              <div itemprop="jobtitle">Seller</div>
              <div itemprop="description">
                I am a full Stack developer (DevOps), I have 7 Years of IT
                experience with following skill, - Django - React - HTML , CSS ,
                Javascript - Python - Shell / BASH Scripting - Linux -
                Oracle/Mysql - Jenkins - Ansbile - Docker - ELK
              </div>
            </div>
          </a>
        </div>
      </Base>
    </div>
  );
}
