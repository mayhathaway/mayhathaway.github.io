import './Projects.css'

function Projects() {
  return (
    <div className="app">
      <div className="container">
        <section className="projects">
          <h1 className="page-title">Projects</h1>
          <div className="page-content">
            <h2>Reader Studies Research</h2>
            <h4>Price Lab for Digital Humanities, 2021 - 2025</h4>
            <p>
               Reader studies project involving genre detection, readability metrics, and measurements of eccentricity on Goodreads, with a focus on contemporary literature and romance readers.
               Covered in <a href="https://www.publicbooks.org/genre-juggernaut-measuring-romance/">Public Books</a> and <a href="https://penntoday.upenn.edu/news/measuring-readers-romance-literary-genre-digital-humanities">Penn Today</a>.
            </p>
            <br></br>
            <h2>Crosswords</h2>
            <h4>The Daily Pennsylvanian, 2024</h4>
            <p>Constructed mini and full-size <a href="https://www.thedp.com/staff/may-hathaway">crosswords</a> for my college newspaper; as a deputy editor, I led shifts for full-size construction.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects