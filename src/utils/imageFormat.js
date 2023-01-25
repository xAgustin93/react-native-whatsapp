export function imageExpoFormat(uri) {
  let filename = uri.split("/").pop();

  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : "image";

  return { uri, name: filename, type };
}
