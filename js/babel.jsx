class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event){
    this.setState({
      link: event.target.value
    });
      $("#box").append("<button id='test'>new link</button><br>").on({
        'click': this.handleClick
      });
      document.getElementById("test").value = event.target.value;    
  };
  handleClick(event){
    this.setState({
      link: event.target.value
    });
  }
  render() {
    return (
      <div className='container'>
        <row>
          <h3 className='text-center'>write your link in embed</h3>
        </row>
        <div className='col-lg-9 col-md-7 col-sm-12 col-xs-12'>
            <div className='row'>
              <input id='textArea' onChange={this.handleChange} />
            </div>
            <div className='row'>
              <iframe width='100%' height='350' type="text/html" src={this.state.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
              </iframe>
            </div>
          </div>
          <div className='col-lg-3 col-md-5 col-sm-12 col-xs-12' id='box'>
            <div><button value='https://www.youtube.com/embed/CtBS35jx1Ls' onClick={this.handleClick}>link 1</button></div>
            <div><button value='https://www.youtube.com/embed/R8GCc8OhTz8' onClick={this.handleClick}>link 2</button></div>
            <div><button value='https://www.youtube.com/embed/Sv6dMFF_yts' onClick={this.handleClick}>link 3</button></div>
            <div><button value='https://www.youtube.com/embed/RBumgq5yVrA' onClick={this.handleClick}>link 4</button></div>
            <div><button value='https://www.youtube.com/embed/CHekNnySAfM' onClick={this.handleClick}>link 5</button></div>
          </div>
      </div>
    );
  }
};
ReactDOM.render(<App />, document.querySelector('#app'));