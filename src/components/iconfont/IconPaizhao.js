/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconPaizhao = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M944.4352 545.536c-14.1312 0-25.6-11.4688-25.6-25.6v-11.8272c0-14.1312 11.4688-25.6 25.6-25.6s25.6 11.4688 25.6 25.6v11.8272c0 14.1312-11.4688 25.6-25.6 25.6z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M790.8352 890.4192H235.2128c-98.816 0-179.2-85.4016-179.2-190.3616V435.1488c0-104.96 80.384-190.3616 179.2-190.3616h28.416c4.9664 0 9.6768-2.4064 12.5952-6.4l46.848-63.8464c25.856-36.5056 72.704-46.2848 96.4096-46.2848h197.2224c25.088 0 73.3184 10.4448 96.4608 49.4592l41.984 59.8528c3.1232 4.608 7.936 7.168 13.1584 7.168h22.5792c98.816 0 179.2 85.4016 179.2 190.3616 0 14.1312-11.4688 25.6-25.6 25.6s-25.6-11.4688-25.6-25.6c0-76.7488-57.3952-139.1616-128-139.1616h-22.5792c-22.1696 0-42.8544-10.9568-55.296-29.2864l-42.3424-60.3648c-0.4608-0.6656-0.8704-1.28-1.2288-1.9456-10.752-18.7392-40.1408-24.832-52.6848-24.832H419.4816c-9.6768 0-40.448 4.5568-54.6816 24.7296-0.1024 0.1536-0.2048 0.3072-0.3072 0.4096l-47.0016 64a67.00544 67.00544 0 0 1-53.8624 27.2896h-28.416c-70.6048 0-128 62.464-128 139.1616v264.8576c0 76.7488 57.3952 139.1616 128 139.1616h555.5712c70.6048 0 128-62.464 128-139.1616v-108.288c0-14.1312 11.4688-25.6 25.6-25.6s25.6 11.4688 25.6 25.6v108.288c0.0512 105.0624-80.3328 190.464-179.1488 190.464z"
        fill={getIconColor(color, 1, '#44454A')}
      />
      <path
        d="M513.024 727.9616c-95.1296 0-172.4928-77.4144-172.4928-172.4928S417.8944 382.976 513.024 382.976s172.4928 77.4144 172.4928 172.4928-77.3632 172.4928-172.4928 172.4928z m0-293.8368c-66.8672 0-121.2928 54.4256-121.2928 121.2928s54.4256 121.2928 121.2928 121.2928 121.2928-54.4256 121.2928-121.2928-54.3744-121.2928-121.2928-121.2928zM278.1184 419.9936H198.4c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6h79.7184c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6z"
        fill={getIconColor(color, 2, '#44454A')}
      />
    </svg>
  );
};

IconPaizhao.defaultProps = {
  size: 18,
};

export default IconPaizhao;
