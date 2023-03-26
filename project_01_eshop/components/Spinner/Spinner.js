class Spinner {
  render() {
    html = `
        <div class="spinner-container">
            <img class="spinner__img" src="components/Spinner/img/Ellipsis-2s-200px.svg" />
        </div>
    `;

    ROOT_SPINNER.innerHTML = html;
  }
}

const spinnerPage = new Spinner();