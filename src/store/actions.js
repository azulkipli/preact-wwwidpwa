import createStore from "unistore";

// If actions is a function, it gets passed the store:
let actions = store => ({
  //Actions receive current state as first parameter and any other params next
  //check this function as <button onClick={incrementAndLog}>
  incrementAndLog: ({ count }, args) => {
    console.info("incrementAndLog apalah: ", args);
    return { count: count + 1 };
  },

  // Async actions can be pure async/promise functions:
  async getRSSFeed(state) {
    const feedURL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid";
    let res = await fetch(feedURL);

    let resfeeds = await res.json();
    if (resfeeds.status === "ok" && resfeeds.hasOwnProperty("items")) {
      return { listRSSwwwid: resfeeds.items, loadingRSSFeed: false };
    }
  },

  // ... or just actions that call store.setState() later:
  incrementAsync(state) {
    setTimeout(() => {
      store.setState({ count: state.count + 1 });
    }, 100);
  },

  // signin process
  signin(state) {
    return { login: true };
  },

  showModal: (state, title = "", content = "") => {
    // console.log("toggleModal state: ", state);
    // console.log("toggleModal title: ", title);
    // console.log("toggleModal content:", content);
    if (title !== "" || content !== "") {
      return { modalActive: true, modalTitle: title, modalContent: content };
    } else {
      return { modalActive: true };
    }
  },

  hideModal: () => {
    return { modalActive: false };
  },

  toggleDrawer: state => {
    return { drawerActive: !state.drawerActive };
  },

  hideDrawer(state) {
    return { drawerActive: false };
  }
});

export default actions;