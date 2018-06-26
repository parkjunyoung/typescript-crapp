import * as React from 'react';
import * as styles from './Posts.css';

const Posts: React.SFC = () => (
    <div className={styles.box}>
        Posts 입니다.
        <div className={styles.hello}>
            hello 작동되는지 확인
        </div>
    </div>
);

export default Posts;