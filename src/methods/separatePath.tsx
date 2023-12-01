function separatePath(path: string) {
  return path.split("/").filter((part) => part !== "");
}

export default separatePath;
