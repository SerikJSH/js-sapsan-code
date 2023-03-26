class Error {
  render() {
    const html = `
    <div class="error-container">
        <div class="error-message">
            <h3>Access denied!</h3>
            <p>Try later...</p>
        </div>    
    </div>
    `;

    ROOT_ERROR.innerHTML = html;
  }
}

errorPage = new Error();
