// 브라우저에서 동작하는 가져오기/내보내기는 
// ESM

// import autoprefixer from 'autoprefixer'

// export {
//  plugins : [
//     autoprefixer
//  ]
// }



// Node.js 환경에서는
// CommonJS

// const autoprefixer = require('autoprefixer')
// module.exports = {
//   plugins : [
//     autoprefixer
//   ]
// }

// 위의 코드를 간소화 시키면
module.exports = {
  plugins : [
    require('autoprefixer')
  ]
}