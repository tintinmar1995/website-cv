class Etude extends HTMLElement {
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
          color: #6e65c7;
        }
        .columnrightnoborder {
          padding-left: 5px;
          min-width: 500px;
          flex:0 0 80%;
        }
      </style>
      <div class="staticrow">
        <div class="columnleft" id="year">2013</div>
        <div class="columnrightnoborder">
            <b id='label'></b>, <slot name='desc'>Desc...</slot>.
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
  }
}

customElements.define("row-school", Etude);
