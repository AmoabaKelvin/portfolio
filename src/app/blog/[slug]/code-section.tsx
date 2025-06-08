'use client';

import ShikiHighligher from 'react-shiki';

const CodeSection = ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  return (
    <div>
      <ShikiHighligher theme="github-dark-dimmed" language={language}>
        {code}
      </ShikiHighligher>
    </div>
  );
};

export default CodeSection;
