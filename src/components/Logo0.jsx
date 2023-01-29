import * as React from "react";
import Image from 'next/image';

// The Logo must have a prop named type with a default value of default
// The default logo must be displayed when no prop is passed
// The muted logo must be displayed when the type prop is muted
 

function LogoImg({ type = "default", backgroundImg }) {
  return (
    <Image 
    type={type}
    src={backgroundImg}
    height={144}  
    width={144} 
    alt="Logo" />
  );
}

const image = require("./assets/cat.jpg").default;
export default class testComponent extends Component {
  render() {
    return (
      <div>
        <img src={image} />
      </div>
    );
  }
}


export default function Logo() {
  return (
        <div>
        <LogoImg 
        type={"muted"}
        // backgroundImg={'/images/logo.svg'}
        />

        {/* <LogoImg 
        type={"muted"}
        backgroundImg={'/images/logo-muted.svg'}
        /> */}
        </div>
  );
}


// function SamplePropsOne() {
//   type: 'one';
//   name: string;
// }

// function SamplePropsTwo() {
//   type: 'two';
//   color: string;
// }

// function Props = SamplePropsOne | SamplePropsTwo;

// const SampleComponent: React.FC<Props> = props => (
//   props.type === 'one' ? (
//     <h1>{props.name}</h1>
//   ) : (
//     <h1>{props.color}</h1>
//   )
// );
