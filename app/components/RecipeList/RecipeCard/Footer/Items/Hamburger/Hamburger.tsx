// type
import { ObjectId } from "mongodb";
// component
import HamburgerList from "./HamburgerList";
// svg
import { HamburgerSVG } from "../../../SVGContainer";

export default function Hamburger({
  id,
  password,
}: {
  id: ObjectId;
  password: string;
}) {
  return (
    <div className="relative group">
      <HamburgerSVG />
      <div className="relative" />
      <HamburgerList id={id} password={password} />
    </div>
  );
}
