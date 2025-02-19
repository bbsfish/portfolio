"use client";
import React, { useState } from "react";

export default function Header() {
  const [isBargerOpen, setIsBargerOpen] = useState(false);

  const BargerButton = function () {
    return (
      <i
        id="barger"
        className="fa-sharp fa-solid fa-bars"
        onClick={() => {
          setIsBargerOpen(!isBargerOpen);
        }}
        ></i>
    );
  }
  
  const HederNavForSp = function() {
    return (
      <nav
        id="header-nav-sp"
        className="hd-nav-sub header-nav-sp"
        style={{
          visibility: isBargerOpen ? "visible" : "hidden",
          opacity: isBargerOpen ? "1" : "0",
          height: isBargerOpen ? "27px" : "0px",
        }}
        >
        <ul>
          <li className="active-hd-nav">
            <a href="#skill">スキル</a>
          </li>
          <li className="active-hd-nav">
            <a href="#devs">作ったもの</a>
          </li>
          <li>
            <a href="#weblink">ウェブリンク</a>
          </li>
        </ul>
      </nav>
    );
  }
  
  return (
    <header id="header">
      <div className="hd-content">
        <div className="hd-logo">
          <a href="/" className="logo-title">ポートフォリオ</a>
          <BargerButton />
        </div>
        <HederNavForSp />
        <nav
          id="header-nav-pc"
          className="hd-nav-sub header-nav-pc"
          >
          <ul>
            <li className="active-hd-nav">
              <a href="#skill">スキル</a>
            </li>
            <li>
              <a href="#devs">作ったもの</a>
            </li>
            <li>
              <a href="#weblink">ウェブリンク</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}