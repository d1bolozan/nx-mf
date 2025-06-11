const checkDuplicateItemName = (
  listItems: any[],
  currentItemID: number | string,
  newName: string
) => {
  const duplicateItemName =
    listItems?.length > 0
      ? listItems
          ?.filter((item) => item.id !== currentItemID)
          .some(
            (item) =>
              item.name.toLowerCase() ===
              newName
                .toLowerCase()
                .split(" ")
                .filter((word) => word !== "")
                .join(" ")
          )
      : false;

  return duplicateItemName;
};

export default checkDuplicateItemName;
