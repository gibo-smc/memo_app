module.exports = {
  // テスト対象の拡張子
  "moduleFileExtensions": [
    "js",
    "vue",
  ],
  // specファイル中の"^@/(.*)$"にマッチする文字列を"<rootDir>/src/$1"のパスに置き換えてテストを実行
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // transformerを設定
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
  },
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue",
  ],
}