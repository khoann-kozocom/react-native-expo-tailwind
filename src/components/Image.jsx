import * as React from 'react';
import FastImage from 'react-native-fast-image';

export const Image = ({ source, style, className = '', ...props }) => {
  return (
    <FastImage
      source={
        Object.prototype.hasOwnProperty.call(source, 'uri')
          ? { ...source, cache: FastImage.cacheControl.immutable }
          : source
      }
      className={className}
      style={style}
      {...props}
    />
  );
};

export const preloadImages = (sources) => {
  FastImage.preload(sources.map((source) => ({ uri: source })));
};
