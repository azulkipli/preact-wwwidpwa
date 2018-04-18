import { Component } from "preact";
export default class Clock extends Component {
  constructor() {
    super();
    // set initial time:
    this.state.time = Date.now();

    this.state.year = new Date(Date.now()).getFullYear("Y");
  }

  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render(props, state) {
    let time = new Date(state.time).toLocaleTimeString("id");
    return (
      <div class="text-center">
        built with
        <span lang="ar" style={{ margin: "0 6px", fontSize: "17px", fontWeight: "bolder" }}>
          بسم الله
        </span>
        by azul &copy; {state.year}
      </div>
    );
  }
}
