import React from 'react';

const SvgXmark = () => {
  return (
    <svg
      width="20"
      height="23"
      viewBox="0 0 25 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect x="0.825439" y="0.596191" width="23.2804" height="27.2705" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use
            xlinkHref="#image0_45_461"
            transform="translate(-0.0856951) scale(0.00488079 0.00416667)"
          />
        </pattern>
        <image
          id="image0_45_461"
          width="240"
          height="240"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default SvgXmark;
