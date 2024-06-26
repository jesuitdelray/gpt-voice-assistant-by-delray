/* eslint-disable max-len */
export function errorIcon(className: string) {
  const errorIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="${className}">
    <path d="M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z" stroke="#FF2D2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 8V12" stroke="#FF2D2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 16H12.01" stroke="#FF2D2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`

  const errorIconEl = new DOMParser()
    .parseFromString(errorIcon, 'image/svg+xml')
    .querySelector('svg') as SVGElement

  return errorIconEl
}
