// rafceと入力後タブキーをおす🤗

import React from 'react'
import styles from './style.module.scss'

const Post = () => {
  return (
    <div className={styles.post}>
      <p>名前が入る予定</p>
      <p>日付が入る予定</p>
      <p>登録されたデータを表示する予定</p>
      <p className={styles.link}>リンクが入ります</p>
    </div>
  )
}

export default Post