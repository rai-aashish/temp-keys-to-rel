'use client';

import { cn } from '@/lib';
import React, { useState } from 'react';

interface ContentBoxProps {
  content: string;
  className?: string;
  contentClassName?: string;
  toggleButtonClassName?: string;
  maxLines?: number;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  content,
  contentClassName,
  toggleButtonClassName,
  className,
  maxLines = 3,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={cn(['', className])}>
      <p
        style={{
          display: '-webkit-box',
          WebkitLineClamp: isExpanded ? 'none' : maxLines,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'clip',
        }}
        className={cn(['', contentClassName])}
      >
        {content}
      </p>
      {content.split(/\s+/).length > 100 && ( // checks if content is long enough to need a toggle
        <button type="button" onClick={toggleExpand} className={cn(['text-b1 font-semibold', toggleButtonClassName])}>
          {isExpanded ? 'Read Less' : 'Read more'}
        </button>
      )}
    </div>
  );
};

export default ContentBox;
