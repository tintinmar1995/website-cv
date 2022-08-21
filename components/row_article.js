class Article extends HTMLElement {
  constructor() {
    // Always call parent constructor first
    super();

    // Get template content from DOM
    var template = document.createElement("TEMPLATE");
      template.innerHTML = `
      <style>
        p {
          margin: 0px
        }
        .staticrow{
          display: flex;
          margin-bottom: 10px;
        }
        .columnleft {
          text-align: right;
          padding-right: 5px;
          flex: 0 0 85px;
        }
        .columnrightnoborder {
          padding-left: 5px;
          min-width: 500px;
          flex:0 0 80%;
        }

      </style>
      <div class="staticrow">
        <div class="columnleft" id='year'></div>
        <div class="columnrightnoborder">
          <b id='label'></b>
          <p>
            <slot name='desc'>Desc...</slot> <a id="link"></a>
          </p>
        </div>
      </div>
      `
    // Create new Shadow Root
    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );

  }

  connectedCallback() {
    let year = this.getAttribute('year') || '';
    if(year){
      this.shadowRoot.querySelector('#year').innerText = year;
    }

    let label = this.getAttribute('label') || '';
    if(label){
      this.shadowRoot.querySelector('#label').innerText = label;
    }

    let href = this.getAttribute('href') || '';
    let link = this.getAttribute('link') || "Lire l'article";
    if(href){
      this.shadowRoot.querySelector('#link').href = href;
      this.shadowRoot.querySelector('#link').innerText = link;
    }
  }
}

customElements.define("row-article", Article);
