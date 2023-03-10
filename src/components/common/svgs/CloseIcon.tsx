import { SVGProps } from 'react'

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line stroke="rgb(152, 161, 192)" x1="18" y1="6" x2="6" y2="18" />
    <line stroke="rgb(152, 161, 192)" x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
