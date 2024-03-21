//import * as React from "react";
import { useMouse } from "@uidotdev/usehooks";
import Greeting from "./Greeting";

export default function Mouse() {
  const [mouse, ref] = useMouse();

  // const xIntersecting = mouse.elementX > 0 && mouse.elementX < 300;
  // const yIntersecting = mouse.elementY > 0 && mouse.elementY < 300;
  // const isIntersecting = xIntersecting && yIntersecting;

  return (
    <section>
      <h1>useMouse</h1>
      <article
        ref={ref}
        style={{ width: "300px", height: "300px" }}
        className="active"
      >
        Use a ref to add coords relative to the element
      </article>
      <Greeting />
    </section>
  );
}