import Link from "next/link";
import {RiInstagramFill, RiMailFill, RiPhoneFill} from "react-icons/ri";

export const Contact = () => (
  <>
    <Link href="https://www.instagram.com/danksy87" className="block mb-2">
      <RiInstagramFill className="inline-block mr-2" /> danksy87
    </Link>

    <Link href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#100;&#097;&#110;&#107;&#115;&#121;&#046;&#110;&#101;&#116;" className="block mb-2">
      <RiMailFill className="inline-block mr-2" />
      hello<span style={{display:'none'}}>foo</span>@danksy.net
    </Link>

    <RiPhoneFill className="inline-block mr-2 mb-2" />
    0484<span style={{display:'none'}}>bar</span> 128 161<br/>
  </>
)
