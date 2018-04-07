import React from "react";

class Kontakt extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <main>
        <section className="section">
          <h1 className="title">Hier finden Sie uns</h1>
          <iframe
            height="450"
            width="100%"
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCnNjfA2gD0HajkYw3YcnfG-aJPpp85Dgs&q=Karpfenteich+41,+24837+Schleswig,+Deutschland"
          />
        </section>
        <hr />
        <section className="section">
          <h1 className="title">Senden Sie uns eine E-Mail</h1>
          <form action="https://formspree.io/info@emsig.sh" method="POST">
            <input type="hidden" name="_subject" value="Neue Anfrage!" />
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">E-Mail</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  name="_replyto"
                  placeholder="E-Mail"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Nachricht</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  placeholder="Textarea"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  type="submit"
                  className="button is-link"
                  value="Senden"
                />
              </div>
            </div>
          </form>
        </section>
      </main>
    );
  }
}

export default Kontakt;
