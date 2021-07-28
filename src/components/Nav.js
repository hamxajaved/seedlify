// @flow
import * as React from "react";
import "../Css Files/Product/navbar.css";

export function Nav() {
  return (
    <div>
      <header>
        <h1>
          <b>SEEDL</b>
          <span>ify</span>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="">
                <b>HOME</b>
              </a>
            </li>
            <li>
              <a href="">
                <b>PRODUCTS</b>
              </a>
            </li>
            <li>
              <a href="">
                <b>SERVICES</b>
              </a>
            </li>
            <li>
              <a href="">
                <b>ABOUT</b>
              </a>
            </li>
            <li>
              <a href="">
                <b>CONTACT</b>
              </a>
            </li>
            <i class="fa fa-user">
              <b>LOGIN</b>
            </i>
          </ul>
        </nav>
      </header>
    </div>
  );
}
