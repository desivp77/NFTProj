import * as React from "react";
import Image from 'next/image';


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

export default function Logo() {
  return (
        <div>
        <LogoImg 
        type={undefined}
        backgroundImg={'/images/logo.svg'}
        />

        <LogoImg 
        type={"muted"}
        backgroundImg={'/images/logo-muted.svg'}
        />
        </div>
  );
}

