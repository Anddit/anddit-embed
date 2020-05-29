export default () => {
  Object.defineProperty(Array.prototype, 'myFlat', {
    value (depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth - 1)) ? toFlatten.flat(depth - 1) : toFlatten)
      }, [])
    }
  })
}
