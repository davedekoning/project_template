
// Get all the headings in the document up to heading 3
let headings = document.querySelectorAll('h1, h2, h3');

// Create a table of contents element
let tocElement = document.createElement('div');
tocElement.id = 'toc';
document.body.appendChild(tocElement);

// Create a list element for the table of contents
let tocList = document.createElement('ul');
tocElement.appendChild(tocList);

// Generate the table of contents
headings.forEach((heading) => {
  if (heading.tagName === 'H1' || heading.tagName === 'H2' || heading.tagName === 'H3') {
    let listItem = document.createElement('li');
    let link = document.createElement('a');
    // console.log(heading.id)
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    listItem.appendChild(link);

      // Add indents based on heading level
      if (heading.tagName === 'H2') {
        listItem.style.marginLeft = '20px';
      } else if (heading.tagName === 'H3') {
        listItem.style.marginLeft = '40px';
      }

    tocList.appendChild(listItem);
  }
});

// Add a scroll event listener to update the position of the table of contents
window.addEventListener('scroll', function () {
  let toc = document.getElementById('toc');
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop, window.scrollY)
  // toc.style.top = scrollTop + 'px';
});

// Style the table of contents
const tocStyles = `
  #toc {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 200px;
    background-color: #f8f8f8;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 10px;
  }

  #toc ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  #toc li {
    margin-bottom: 5px;
  }

  #toc a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s ease;
  }

  #toc a:hover {
    color: #007bff;
  }
`;

const styleElement = document.createElement('style');
styleElement.textContent = tocStyles;
document.head.appendChild(styleElement);
