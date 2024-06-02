class ButtonLinks extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.navigateTo("https://example1.com")}>
          Website 1
        </button>
        <button onClick={() => this.navigateTo("https://example2.com")}>
          Website 2
        </button>
        <button onClick={() => this.navigateTo("https://example3.com")}>
          Website 3
        </button>
      </div>
    );
  }

  navigateTo = (url) => {
    window.location.href = url;
  };
}

export default ButtonLinks;
