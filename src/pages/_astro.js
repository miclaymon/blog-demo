// import { useRouteData } from "@astrojs/hooks";
// import { renderMarkdown } from "@astrojs/renderer-markdown";

async function renderCustomMarkdown(content) {
    const options = {
      overrides: {
        h1: (props) => {
          const slug = props.children[0].toLowerCase().replace(/\s+/g, "-"); // replace spaces with dashes
          return `
            <h1 id="${slug}" class="hover-anchor">
              <a href="#${slug}" class="anchor-link"></a>
              ${props.children[0]}
            </h1>
          `;
        },
        h2: (props) => {
          const slug = props.children[0].toLowerCase().replace(/\s+/g, "-"); // replace spaces with dashes
          return `
            <h2 id="${slug}" class="hover-anchor">
              <a href="#${slug}" class="anchor-link"></a>
              ${props.children[0]}
            </h2>
          `;
        },
        h3: (props) => {
          const slug = props.children[0].toLowerCase().replace(/\s+/g, "-"); // replace spaces with dashes
          return `
            <h3 id="${slug}" class="hover-anchor">
              <a href="#${slug}" class="anchor-link"></a>
              ${props.children[0]}
            </h3>
          `;
        },
        h4: (props) => {
          const slug = props.children[0].toLowerCase().replace(/\s+/g, "-"); // replace spaces with dashes
          return `
            <h4 id="${slug}" class="hover-anchor">
              <a href="#${slug}" class="anchor-link"></a>
              ${props.children[0]}
            </h4>
          `;
        },
        h5: (props) => {
          const slug = props.children[0].toLowerCase().replace(/\s+/g, "-"); // replace spaces with dashes
          return `
            <h5 id="${slug}" class="hover-anchor">
              <a href="#${slug}" class="anchor-link"></a>
              ${props.children[0]}
            </h5>
          `;
        },
        h6: (props) => {
          const slug = props.children[0].toLowerCase().replace(/\s+/g, "-"); // replace spaces with dashes
          return `
            <h6 id="${slug}" class="hover-anchor">
              <a href="#${slug}" class="anchor-link"></a>
              ${props.children[0]}
            </h6>
          `;
        },
      },
    };
  
    const result = await renderMarkdown(content, options);
    return result;
  }
  