export var defaultPagination = {
  showSizeChanger: true,
  defaultPageSize: 10,
  position: ['bottomCenter'],
  showQuickJumper: true,
  size: 'small',
  showTotal: function showTotal(total) {
    return "\u5171 ".concat(total, " \u6761");
  }
};