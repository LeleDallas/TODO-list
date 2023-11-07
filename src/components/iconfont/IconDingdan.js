/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconDingdan = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M884.0192 422.144c-14.1312 0-25.6 11.4688-25.6 25.6v22.3744c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6v-22.3744c0-14.1824-11.4176-25.6-25.6-25.6z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M884.0192 526.0288c-14.1312 0-25.6 11.4688-25.6 25.6v191.5904c0 102.9632-83.7632 186.7776-186.7776 186.7776H340.2752c-102.9632 0-186.7776-83.7632-186.7776-186.7776V364.8c0-87.552 59.1872-161.1264 141.6192-181.2992 7.0656 63.8976 61.3888 113.8176 127.1808 113.8176h167.3216c65.792 0 120.1152-49.8688 127.1808-113.8176 82.432 20.1728 141.6192 93.7472 141.6192 181.2992 0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6c0-116.6336-82.5344-213.8112-195.1232-234.0352-12.7488-57.2416-63.8976-100.1472-124.928-100.1472H422.3488c-61.0304 0-112.1792 42.9056-124.928 100.1472-112.5888 20.224-195.1232 117.4528-195.1232 234.0352v378.4192c0 131.2256 106.752 237.9776 237.9776 237.9776h331.4176c131.2256 0 237.9776-106.752 237.9776-237.9776v-191.5904a25.6512 25.6512 0 0 0-25.6512-25.6zM422.3488 81.8176h167.2704c39.9872 0 72.9088 30.72 76.4416 69.8368-0.1024 1.28-0.1024 2.56 0 3.8912 0.2048 2.304 0.3584 4.7104 0.3584 6.8608v3.1744c0 44.4416-36.1472 80.5888-80.5888 80.5888h-159.744c-44.4416 0-80.5888-36.1472-80.5888-80.5888v-3.1744c0-2.2016 0.1536-4.608 0.3584-6.8096 0.1024-1.3312 0.1024-2.6624 0-3.9424 3.584-39.1168 36.5056-69.8368 76.4928-69.8368z"
        fill={getIconColor(color, 1, '#44454A')}
      />
      <path
        d="M668.6208 457.2672H342.272c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6h326.3488c14.1312 0 25.6-11.4688 25.6-25.6s-11.4688-25.6-25.6-25.6zM668.6208 656.5376H342.272c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6h326.3488c14.1312 0 25.6-11.4688 25.6-25.6s-11.4688-25.6-25.6-25.6z"
        fill={getIconColor(color, 2, '#44454A')}
      />
    </svg>
  );
};

IconDingdan.defaultProps = {
  size: 18,
};

export default IconDingdan;
