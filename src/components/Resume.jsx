import ResumeSections from "./ResumeSections"
function Resume({resume, bulletPoints}) {
    return <div class="resume">
        <ResumeSections resume={resume} bulletPoints={bulletPoints}></ResumeSections>
    </div>
}

export default Resume