import React from "react";

var date = new Date();
var currentYear = date.getFullYear();

export default function SiteFooter() {
  return (
    <div style={{ textAlign: "center" }}>
      <small>
        &copy; Copyright {currentYear}, Road group. All Rights Reserved
      </small>
    </div>
  );
}
