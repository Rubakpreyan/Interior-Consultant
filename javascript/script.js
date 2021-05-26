function clickOn ()  {
  let button = document.getElementById("span-2");

  if (button) {
    changeAttr(
      button,
      "span-2-toggled",
      "bg-white w-10 h-1 border border-white opacity-0"
    );

    changeClass(
      document.getElementById("span-1"),
      "bg-white w-10 h-1 border border-white transition duration-200 transform rotate-45 ease-linear relative top-4"
    );

    changeClass(
      document.getElementById("span-3"),
      "bg-white w-10 h-1 border border-white transition duration-200 transform -rotate-45 ease-linear relative top-0 bottom-1"
    );

    changeClass(
      document.getElementById("nav-items"),
      "space-y-8 visible md:space-y-0 md:visible md:flex md:space-x-8 xl:space-x-14 text-lg leading-5"
    );

    changeClass(document.getElementById("heading"), "invisible");
    changeClass(document.getElementById("content"), "hidden");
    changeClass(document.getElementById("footer"), "hidden");
  } else {
    changeAttr(
      document.getElementById("span-2-toggled"),
      "span-2",
      "bg-white w-10 h-1 border border-white opacity-100"
    );

    changeClass(
      document.getElementById("span-1"),
      "bg-white w-10 h-1 border border-white transition transform duration-200 ease-linear"
    );

    changeClass(
      document.getElementById("span-3"),
      "bg-white w-10 h-1 border border-white transition transform duration-200 ease-linear"
    );

    changeClass(
      document.getElementById("heading"),
      "p-2 uppercase text-sm leading-4 border border-white visible"
    );

    changeClass(
      document.getElementById("nav-items"),
      "space-y-8 invisible md:space-y-0 md:visible md:flex md:space-x-8 xl:space-x-14 text-lg leading-5"
    );

    changeClass(document.getElementById("content"), "inline");

    changeClass(document.getElementById("footer"), "inline");
  }
}

function changeAttr(element, tagId, tagClassName) {
  element.className = tagClassName;
  element.id = tagId;
}

function changeClass(element, className) {
  element.className = className;
}
