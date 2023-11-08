/* tslint:disable */
/* eslint-disable */

import { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconQianbao: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M726.4256 100.7616H303.7184c-127.0272 0-230.4 103.3728-230.4 230.4v374.0672c0 127.0272 103.3728 230.4 230.4 230.4h89.344c14.1312 0 25.6-11.4688 25.6-25.6s-11.4688-25.6-25.6-25.6H303.7184c-98.816 0-179.2-80.384-179.2-179.2V331.1616c0-98.816 80.384-179.2 179.2-179.2h422.656c98.816 0 179.2 80.384 179.2 179.2v31.9488h-139.52c-83.968 0-152.2688 68.3008-152.2688 152.2688s68.3008 152.2688 152.2688 152.2688h139.52v37.5808c0 98.816-80.384 179.2-179.2 179.2h-174.2336c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6h174.2336c127.0272 0 230.4-103.3728 230.4-230.4V331.1616c0.0512-127.0272-103.3216-230.4-230.3488-230.4z m177.664 515.6352h-137.984c-55.7056 0-101.0688-45.312-101.0688-101.0688 0-55.7056 45.312-101.0688 101.0688-101.0688h137.984v202.1376z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M479.5904 884.4288h-12.3392c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6h12.3392c14.1312 0 25.6-11.4688 25.6-25.6s-11.4688-25.6-25.6-25.6zM468.2752 318.3104c0-14.1312-11.4688-25.6-25.6-25.6H282.112c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6h160.5632c14.1824 0 25.6-11.4688 25.6-25.6zM738.2016 510.8224c0 19.5584 15.872 35.4304 35.4304 35.4304s35.4304-15.872 35.4304-35.4304-15.872-35.4304-35.4304-35.4304-35.4304 15.872-35.4304 35.4304z"
        fill={getIconColor(color, 1, '#44454A')}
      />
    </svg>
  );
};

IconQianbao.defaultProps = {
  size: 18,
};

export default IconQianbao;
