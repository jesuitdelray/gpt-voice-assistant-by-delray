import { SVGAttributes } from "react"

export function CopyIcon(props: SVGAttributes<SVGSVGElement>) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_145_6)">
                <path
                    d="M8.00058 8.1705L8 21C8 23.651 10.0631 25.8201 12.6712 25.9894L13 26L21.8288 26.0014C21.4166 27.1659 20.3057 28 19 28H12C8.68629 28 6 25.3137 6 22V11C6 9.69356 6.83509 8.58217 8.00058 8.1705ZM23 4C24.6569 4 26 5.34315 26 7V21C26 22.6569 24.6569 24 23 24H13C11.3431 24 10 22.6569 10 21V7C10 5.34315 11.3431 4 13 4H23ZM23 6H13C12.4477 6 12 6.44772 12 7V21C12 21.5523 12.4477 22 13 22H23C23.5523 22 24 21.5523 24 21V7C24 6.44772 23.5523 6 23 6Z"
                    fill="#C3C7D3"
                />
            </g>
            <defs>
                <clipPath id="clip0_145_6">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
