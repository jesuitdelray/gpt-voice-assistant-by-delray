/* eslint-disable max-len */
export function warningIcon(className: string) {
  const warningIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="${className}">
    <path d="M10.2908 3.8602L1.82075 18.0002C1.64612 18.3026 1.55372 18.6455 1.55274 18.9947C1.55176 19.3439 1.64224 19.6873 1.81518 19.9907C1.98812 20.2941 2.23748 20.547 2.53846 20.7241C2.83944 20.9012 3.18155 20.9964 3.53075 21.0002H20.4708C20.82 20.9964 21.1621 20.9012 21.463 20.7241C21.764 20.547 22.0134 20.2941 22.1863 19.9907C22.3593 19.6873 22.4497 19.3439 22.4488 18.9947C22.4478 18.6455 22.3554 18.3026 22.1808 18.0002L13.7108 3.8602C13.5325 3.56631 13.2815 3.32332 12.9819 3.15469C12.6824 2.98605 12.3445 2.89746 12.0008 2.89746C11.657 2.89746 11.3191 2.98605 11.0196 3.15469C10.72 3.32332 10.469 3.56631 10.2908 3.8602Z" stroke="#FFB03E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 9V13" stroke="#FFB03E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 17H12.01" stroke="#FFB03E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`

  const warningIconEl = new DOMParser()
    .parseFromString(warningIcon, 'image/svg+xml')
    .querySelector('svg') as SVGElement

  return warningIconEl
}
