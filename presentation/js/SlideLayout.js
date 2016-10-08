
/*
 * This hash helps exerslide to determine whether the file needs to be updated
 * or not. Please don't remove it.
 * @exerslide-file-hash c1d1b16e36de349931df2b15adc2a9c8
 */

import ExtensionPoint from 'exerslide/components/ExtensionPoint';
import React from 'react';

/**
 * The base layout for every slide. This allows you do add additional
 * content to all slides before or after the content.
 */
export default function SlideLayout({children}) {
  return (
    <ExtensionPoint tags={['slide', 'a11y-announce-content', 'content']}>
      <div>
        {children}
      </div>
    </ExtensionPoint>
  );
}

SlideLayout.propTypes = {
  /**
   * The current slide content and header are passed in as children by exerslide
   */
  children: React.PropTypes.node,
};
