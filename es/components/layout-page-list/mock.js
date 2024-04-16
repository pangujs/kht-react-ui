import Mock from 'mockjs';
var Random = Mock.Random;
/** 树组件根节点 */
export function getTableList() {
  return Mock.mock({
    code: 200,
    data: [{
      id: Random.uuid(),
      name: Random.cword(3)
    }]
  });
}