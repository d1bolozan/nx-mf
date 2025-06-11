import { TagName } from "../types/ETagName";

const getTagsToSpans = (htmlString: any) => {
  // Create a container element to hold the parsed HTML
  const container = document.createElement("div");

  container.innerHTML = htmlString;

  const convertTagsToSpan = (tagName: any, span: any) => {
    switch (tagName) {
      case TagName.STRONG:
        return (span.style.fontWeight = "bolder");
      case TagName.EM:
        return (span.style.fontStyle = "italic");
      case TagName.U:
        return (span.style.textDecorationLine = "underline");
      case TagName.H1:
        return (span.style.fontSize = "2em");
      case TagName.H2:
        return (span.style.fontSize = "1.5em");
      default:
        return span;
    }
  };

  // Function to recursively check all computed styles
  const getAllStyles = (element: any) => {
    const span =
      element.tagName !== TagName.A
        ? document.createElement(TagName.SPAN)
        : document.createElement(TagName.A);

    if (element.nodeType === Node.ELEMENT_NODE) {
      element.childNodes.forEach(() => {
        // Recursively check child elements
        element?.childNodes?.forEach((child: any) => getAllStyles(child));

        while (element.firstChild) {
          span.appendChild(element.firstChild); // *Moves* the child
        }

        // Copy the attributes
        for (let index = element.attributes.length - 1; index >= 0; --index) {
          span.attributes.setNamedItem(element.attributes[index].cloneNode());
        }

        // Converting tags to span with styles
        convertTagsToSpan(element.tagName, span);
        // Replace it
        element.parentNode.replaceChild(span, element);
      });
    }
  };

  // Start from the container element
  container.childNodes.forEach((child) => getAllStyles(child));

  // Returning as string
  const convertedText: string[] = [];

  container.childNodes.forEach((tag) => {
    if ((tag as Element).innerHTML && (tag as Element).innerHTML.trim().length > 0) {
      convertedText.push((tag as Element).innerHTML);
    }
  });

  const tempConvertedText = convertedText
    .join("")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");

  return tempConvertedText.length > 0 ? tempConvertedText : htmlString;
};

export default getTagsToSpans;
