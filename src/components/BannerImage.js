export default function BannerImage() {
  return (
    <section>
      <div className="banner-container">
        <img
          className="banner-image"
          src="https://cdn.pixabay.com/photo/2016/07/17/02/13/background-1523115_960_720.jpg"
          alt="background"
        />
        <div className="banner-text-container">
          <h2 className="banner-header">Sofie Handlos Thomassen</h2>
          <h3 className="banner-text">
            I am a Multimedia designer with a specialization in frontend
            development and a passion for UX and UI. I would love to be a part
            of you team!
          </h3>
          <a href="/about">
            <button type="submit" className="banner-image-button">
              Read more &rarr;
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
