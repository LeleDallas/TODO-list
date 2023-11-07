/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconFuzhi = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M943.4112 454.7072c-14.1312 0-25.6 11.4688-25.6 25.6v101.3248c0 64.9728-32.6144 124.416-84.6336 159.744 0.8704-8.448 1.3312-16.896 1.3312-25.4464V437.2992c0-134.7072-109.568-244.2752-244.2752-244.2752H311.6032c-8.3456 0-16.6912 0.4096-24.9856 1.28a193.05984 193.05984 0 0 1 159.5392-84.3776h278.6816c106.4448 0 193.0752 86.5792 193.0752 193.0752 0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6c0-134.656-109.568-244.2752-244.2752-244.2752H446.1056c-89.5488 0-171.776 48.9472-214.6304 127.6928a41.69216 41.69216 0 0 0-5.0688 21.4528c-94.8736 28.5184-164.1984 116.6336-164.1984 220.672v306.3808c0 127.0272 103.3728 230.4 230.4 230.4h306.3808c101.6832 0 188.1088-66.2016 218.624-157.7984 91.0848-37.4272 151.4496-126.5152 151.4496-225.8944V480.3072c-0.0512-14.1312-11.52-25.6-25.6512-25.6z m-344.4224 459.4176H292.608c-98.816 0-179.2-80.384-179.2-179.2V428.544c0-98.816 80.384-179.2 179.2-179.2h306.3808c98.816 0 179.2 80.384 179.2 179.2v306.3808c0 15.3088-1.9456 30.1056-5.5296 44.288l-0.1536 0.4608c-0.4096 1.1264-0.7168 2.2528-0.9216 3.3792-21.1456 75.52-90.4704 131.072-172.5952 131.072z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M943.4112 359.7312c-14.1312 0-25.6 11.4688-25.6 25.6v17.92c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6v-17.92c0-14.1824-11.4688-25.6-25.6-25.6z"
        fill={getIconColor(color, 1, '#44454A')}
      />
    </svg>
  );
};

IconFuzhi.defaultProps = {
  size: 18,
};

export default IconFuzhi;
