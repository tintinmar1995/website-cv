class XPRow extends HTMLElement {
  constructor() {
    // Always call parent constructor first
    super();

    // Get template content from DOM
    var template = document.createElement("TEMPLATE");
      template.innerHTML = `
      <link rel="stylesheet" href="../css/balloon.min.css">
      <style>
        p {
          margin:0px;
        }

        ::slotted([slot=desc]) {
          text-align: justify;
          text-justify: inter-word;
        }

        .xp-skills {
          list-style: none;
          margin-left: 10px;
          padding-left: 0;
        }

        .xp-skills > ::slotted(li) {
          padding-left: 1em;
          text-indent: -1em;
        }

        .modal-btn {
          text-decoration:none;
          font-size:20pt;
          color: #555555;
          margin-bottom: 10px;
        }

        .xp-skills > ::slotted(li):before {
          content: "> ";
          padding-right: 4px;
        }

        .xp-logo {
          max-width:100%;
          float:right;
          margin-top:10px;
          display:none;
        }

        .row{
          overflow-x: auto;
          overflow-y: hidden;
          display: flex;
          margin-bottom: 10px;
        }

        .kw-row {
          margin-top: 15px;
        }

        .kw-row > ::slotted(span) {
          padding:3px;
          margin-right:6px;
          font:bold 13px Arial;
          background:#f5f5f5;
          color:#555;
          border-radius:5px;
          width:100px;
          border:1px solid #ccc;
        }

        .columnleft {
          text-align: right;
          padding-left: 2%;
          padding-right: 5px;
          flex: 0 0 85px;
        }

        .columnright {
          border-left: 1px solid;
          padding-left: 5px;
          min-width:500px;
          flex:0 0 80%;
          margin-bottom: 5px;
        }
      </style>
      <div class="row">
        <div class="columnleft">
          <b><p id="start"></p> <p id="end"></p></b>
          <img id="logo" width="80px" class="xp-logo">
        </div>
        <div class="columnright">
            <p><b id='title'></b></p><slot name="desc"></slot>
            <ul class="xp-skills"><slot name="skills"></slot></ul>
            <center>
              <a class="modal-btn" id="modal-btn" data-balloon-pos="up"
                 aria-label="Plus sur cette expérience"
              ><slot name="btn-i"></a>
            </center>
            <div class="kw-row">
              <slot name="kw"></slot>
            </div>
        </div>
      </div>
      `
    // Create new Shadow Root
    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );

    this.onmouseover = this.showLogo;
    this.onmouseout = this.hideLogo;

  }

  connectedCallback() {
    const shadow = this.shadowRoot;

    let label = this.getAttribute('label') || '';
    if(label){
      shadow.querySelector('#title').innerText = label + ',';
    }

    let start = this.getAttribute('start') || '';
    if(start){
      shadow.querySelector('#start').innerText = start;
    }

    let end = this.getAttribute('end') || '';
    if(end){
      shadow.querySelector('#end').innerText = end;
    }

    let hashtag = this.getAttribute('hashtag') || '';
    if(hashtag){
      shadow.querySelector('#modal-btn').href = '#' + hashtag;
    }

    let logo = this.getAttribute('logo') || '';
    if(logo){
      shadow.querySelector('#logo').src = logo;
    }

    let logo_wth = this.getAttribute('logoWidth') || '';
    if(logo_wth){
      shadow.querySelector('#logo').style.width = logo_wth;
    }

  }

  showLogo(){
    this.shadowRoot.querySelector('#logo').style.display = 'block';
  }

  hideLogo(){
    this.shadowRoot.querySelector('#logo').style.display = 'none';
  }

}
customElements.define("xp-row", XPRow);
