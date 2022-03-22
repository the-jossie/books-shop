import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1.5rem"
    height="1.5rem"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.555 13.357 6.906 14.636a.752.752 0 0 0-.646.713c0 .313.255.568.568.568H19.47a.852.852 0 1 1 0 1.704H6.784a2.274 2.274 0 0 1-2.228-2.272c0-.591.225-1.165.634-1.617.41-.452.958-.733 1.547-.792l.408-.041-2.661-9.195H2.852a.852.852 0 0 1 0-1.704h2.272c.38 0 .713.25.819.615l.48 1.657h13.046c.471 0 .853.382.853.852v7.385a.852.852 0 0 1-.767.848Zm-.938-7.38H6.916l1.954 6.75 9.747-.99v-5.76Z"
    fill="currentColor"
    />
    <path
      d="M4.982 22a1.846 1.846 0 1 0 0-3.693 1.846 1.846 0 0 0 0 3.693ZM18.475 22a1.846 1.846 0 1 0 0-3.693 1.846 1.846 0 0 0 0 3.693Z"
    fill="currentColor"
    />
  </svg>
)

export default SvgComponent
