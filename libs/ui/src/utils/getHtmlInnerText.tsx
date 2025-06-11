const getHtmlInnerText = (htmlString: any) => {
  const container = document.createElement("div");
  container.innerHTML = htmlString;

  return container.innerText;
};

export default getHtmlInnerText;
