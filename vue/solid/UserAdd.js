export default {
  functional: true,
  render(_h, _vm) {
    const { _c, _v, data, children = [] } = _vm;

    const {
      class: classNames,
      staticClass,
      style,
      staticStyle,
      attrs = {},
      ...rest
    } = data;

    return _c(
      'svg',
      {
        class: [classNames,staticClass],
        style: [style,staticStyle],
        attrs: Object.assign({"viewBox":"0 0 20 20","fill":"currentColor"}, attrs),
        ...rest,
      },
      children.concat([_c('path',{attrs:{"d":"M8 9a3 3 0 100-6 3 3 0 000 6zm0 2a6 6 0 016 6H2a6 6 0 016-6zm8-4a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"}})])
    )
  }
}