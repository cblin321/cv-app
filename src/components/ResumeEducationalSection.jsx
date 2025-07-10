function ResumeEducationalSection({resume}) {

    return <section id="educational-resume">
            <h1>Education</h1>
            {resume.educational.map(i => {
                return <div class="educational-resume-entry resume-entry" key={i.id}>
                    <h2>{`${i.institution}`}</h2>
                    <p class="italics">{`${i.time}`}</p>
                    <p class="italics">{`${i.degree}`}</p>
                    <p class="italics">{`${i.location}`}</p>
                </div>
            })
        }
        </section>
}

export default ResumeEducationalSection