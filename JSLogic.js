// Convert an array of file/folder paths into a tree object

function buildTree(paths) {
  const tree = {};

  for (const path of paths) {
    const parts = path.split("/");
    let current = tree;

    for (const part of parts) {
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    }
  }

  return tree;
}

const paths = [
  "/home/user/docs",
  "/home/user/photos",
  "/home/user/docs/file1.txt",
  "/home/admin/logs",
];

console.log(JSON.stringify(buildTree(paths), null, 2));
