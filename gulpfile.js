//  Node  Runtime Runs on a compter
//  Common.js Node Backend JS API work with server side
//  require()
// ES Modules import Browser JS Framework or Vanilla.js
// export export default
const {src,dest} = require('gulp')


const static = function(){
    return  src('src/static/data/*.*').pipe(dest('dist/data'))
}


exports.default = static
 