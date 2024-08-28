import React from 'react';
import Giscus from '@giscus/react';

export const Comment = () => {
  return (
    <div style={{ paddingTop: 50 }}>
      <Giscus
        id="comments"
        // 以下部分参考 Giscus 生成的代码填写
        repo="jiangjiax/informedainews.com" 
        repoId="R_kgDOME1nUQ" 
        category="General"
        categoryId="DIC_kwDOME1nUc4Ch_KL"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
};

export default Comment;