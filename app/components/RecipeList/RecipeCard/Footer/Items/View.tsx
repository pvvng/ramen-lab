import { EyeSVG } from "../../SVGContainer";

export default function View({view} : {view : number}){
  return (
    <>
      <EyeSVG />
      <span className="m-0">{view}</span>
    </>
  )
}