function ResumeGeneralSection({resume}) {
    return <section id="general-resume">
            <div class="resume-header">
                <h1 class="resume-name">{resume.general.name}</h1>
                    <div className="subheading-container">
                        {resume.general.phone && <h2 class="resume-subheading">{resume.general.phone}</h2> }
                        {resume.general.email && <h2 class="resume-subheading">{resume.general.email}</h2> }
                        {resume.general.linkedin && <h2 class="resume-subheading">{resume.general.linkedin}</h2> }
                    </div>
            </div>
        </section>
}

export default ResumeGeneralSection