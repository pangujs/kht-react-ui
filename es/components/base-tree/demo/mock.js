import Mock from 'mockjs';
var Random = Mock.Random;
/** 树组件根节点 */
export function getOrganizational() {
  return Mock.mock({
    code: 200,
    data: [{
      id: Random.uuid(),
      name: Random.cword(3),
      fullName: Random.cword(3) + '/' + Random.cword(24)
    }]
  });
}
/** 树组件子节点 */
export function getOrganizationalChildren() {
  return Mock.mock({
    code: 200,
    data: [{
      id: Random.uuid(),
      name: Random.cword(3),
      fullName: Random.cword(3) + '/' + Random.cword(24)
    }, {
      id: Random.uuid(),
      name: Random.cword(3),
      fullName: Random.cword(3) + '/' + Random.cword(24)
    }, {
      id: Random.uuid(),
      name: Random.cword(3),
      fullName: Random.cword(3) + '/' + Random.cword(24)
    }, {
      id: Random.uuid(),
      name: Random.cword(3),
      fullName: Random.cword(3) + '/' + Random.cword(24)
    }, {
      id: Random.uuid(),
      name: Random.cword(3),
      fullName: Random.cword(3) + '/' + Random.cword(24)
    }]
  });
}