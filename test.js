function pathsToTree(paths) {
  const tree = {};

  for (const path of paths) {
    const parts = path.split("/");
    let current = tree;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];

      if (!current[part]) {
        // If last item → file → null
        current[part] = {};
      }
      current = current[part] ;
    }
  }

  return tree;
}

const paths = [
  "src/components/Button.js",
  "src/components/Input.js",
  "src/utils/helpers.js",
  "public/index.html",
];

console.log(JSON.stringify(pathsToTree(paths), null, 2));
