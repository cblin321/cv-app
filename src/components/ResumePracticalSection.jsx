function ResumePracticalSection({resume, bulletPoints}) {
    return <section id="practical-resume">
        <h1>Practical Experience</h1>
        { 
            resume.practical.map(i => {
                const points = i.points.map(point => <p>{bulletPoints[point]}</p>)
                return <div class="practical-resume-entry resume-entry" key={i.id}>
                    <h2>{i.name}</h2>
                    <p class="italics">{i.time}</p>
                    <p class="italics">{i.role}</p>
                    <p class="italics">{i.location}</p>
                    {/* {points} */}
                    <p class="practical-resp">{i.resp}</p>
                </div>
            })
        }

        </section>
}

export default ResumePracticalSection