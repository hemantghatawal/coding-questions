function detectType(value: any): string {
  if (value == null) {
    return `${value}`;
  }
  const proto = Object.getPrototypeOf(value)?.constructor?.name.toLowerCase()
  console.log("proto -> ", proto)
  return proto;
}

console.log(detectType("HGello"));
