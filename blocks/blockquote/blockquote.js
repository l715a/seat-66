export default async function decorate(block) {
  const quoteDiv = block.querySelector(':scope > div > div');
  const element = document.createElement('blockquote');
  element.innerHTML = quoteDiv.innerHTML;
  quoteDiv.replaceWith(element);

  const authorDiv = block.querySelector(':scope > div:nth-of-type(2) > div');
  if(authorDiv) {
    const authorElement = document.createElement('p');
    authorElement.innerHTML = `<strong><em>${authorDiv.innerHTML}</em></strong>`;
    authorDiv.replaceWith(authorElement);
  }
}