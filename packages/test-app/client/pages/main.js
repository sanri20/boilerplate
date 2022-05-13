import { html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'



class TestAppMain extends connect(store)(PageView) {
  static get properties() {
    return {
      open: { type: Boolean, attribute: 'open', reflect: true }
    };
  }


  static get styles() {
    return css`
    header {
      width: flex;
      height: 20%;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      background-color : rgba(122, 50, 43, 1)
    }

   

    main {
      width: flex;
      height: 80%;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      background-color : rgba(192, 0, 0, 1)
    }
    
    .inner-box-left {
      background: blue;
      width: 80%;
      height: 100%;
      float: left;
    }
    .inner-box-right {
      background: yellow;
      height: 100%;
      width: 20%;
      float: right;
      margin:0;
    }

    .info-card {
      background : white;
      height: 45%;
      width : 47.5%;
      margin : 1%;
      display:flex;
      float: left;
      
    }
    
    .inline-block { display: inline-block; }
    `
  }

  render() {
    return html`

    <header>
      <h1>솔로몬 서비스 리스트</h1>
    
    </header>
    
    <main>
      <div class="inner-box-left">
        <div class="info-card">
          
         
        </div>

        <div class="info-card"></div>
        <div class="info-card"></div>
        <div class="info-card"></div>
      </div>
      <div class="inner-box-right">2</div>
    </main>
`
  }

  constructor() {
    super();
  }
}


window.customElements.define('test-app-main', TestAppMain)


