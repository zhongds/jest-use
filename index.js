#jest@19.0.2
jest运行方式：
1.npm test (package.json配了相应的命令)
2.node_module/.bin/jest 

jest默认执行__tests__下的文件，也可以指定文件运行：
1.执行某个文件夹下所有的文件(路径比如：__tests__/123/)： jest 123/*
2.执行某个文件（比如：action.test.js）: jest action.test.js
3.某一类型文件：jest reducer*  (会匹配所有的含reducer的文件)

export default XXX  ,require的时候要加default,如：
//action.js
export default () => 1

//__tests__/action.test.js
const action = require('../action').default

